/**
 * HubSpot integration utilities for Unity Financial Network
 * Handles lead creation and management in HubSpot CRM
 */

interface HubSpotLeadData {
  firstName: string
  lastName: string
  email: string
  phone?: string
  appointmentType?: string
  appointmentDate?: string
  appointmentTime?: string
  preferredContact?: string
  message?: string
  language?: string
  source?: string
}

interface HubSpotResponse {
  success: boolean
  contactId?: string
  error?: string
  details?: any
}

/**
 * Send lead data to HubSpot via DigitalOcean Function
 * Falls back to direct API if function URL is not configured
 */
export async function sendToHubSpot(leadData: HubSpotLeadData): Promise<HubSpotResponse> {
  try {
    // First, try using DigitalOcean Function if URL is configured
    const functionUrl = process.env.NEXT_PUBLIC_DO_FUNCTION_URL
    
    if (functionUrl && !functionUrl.includes('YOUR-ID')) {
      const response = await fetch(functionUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(leadData)
      })

      if (!response.ok) {
        throw new Error(`Function responded with status: ${response.status}`)
      }

      return await response.json()
    }

    // Fallback to direct HubSpot API call
    return await createHubSpotLeadDirect(leadData)
  } catch (error) {
    console.error('Error sending to HubSpot:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    }
  }
}

/**
 * Create lead directly in HubSpot (server-side only)
 * This should only be called from API routes, not from client-side code
 */
async function createHubSpotLeadDirect(leadData: HubSpotLeadData): Promise<HubSpotResponse> {
  const hubspotApiKey = process.env.HUBSPOT_API_KEY
  
  if (!hubspotApiKey) {
    console.error('HubSpot API key not configured')
    return {
      success: false,
      error: 'HubSpot integration not configured'
    }
  }

  try {
    // Prepare contact properties for HubSpot
    const properties: Record<string, string> = {
      email: leadData.email,
      firstname: leadData.firstName,
      lastname: leadData.lastName,
      lifecyclestage: 'lead',
      hs_lead_status: 'NEW'
    }

    // Add optional properties if present
    if (leadData.phone) properties.phone = leadData.phone
    if (leadData.source) properties.leadsource = leadData.source
    if (leadData.message) {
      properties.message = leadData.message
    }

    // Custom properties for appointment data
    if (leadData.appointmentType) {
      properties.appointment_type = leadData.appointmentType
      properties.appointment_date = leadData.appointmentDate || ''
      properties.appointment_time = leadData.appointmentTime || ''
      properties.preferred_contact_method = leadData.preferredContact || ''
    }

    // Make API call to HubSpot
    const response = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${hubspotApiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ properties })
    })

    if (response.ok) {
      const data = await response.json()
      return {
        success: true,
        contactId: data.id
      }
    } else if (response.status === 409) {
      // Contact already exists, try to update
      return await updateExistingContact(leadData.email, properties, hubspotApiKey)
    } else {
      const errorData = await response.json()
      return {
        success: false,
        error: `HubSpot API error: ${response.status}`,
        details: errorData
      }
    }
  } catch (error) {
    console.error('Error creating HubSpot lead:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to create lead'
    }
  }
}

/**
 * Update an existing contact in HubSpot
 */
async function updateExistingContact(
  email: string,
  properties: Record<string, string>,
  apiKey: string
): Promise<HubSpotResponse> {
  try {
    // Search for existing contact
    const searchResponse = await fetch('https://api.hubapi.com/crm/v3/objects/contacts/search', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        filterGroups: [{
          filters: [{
            propertyName: 'email',
            operator: 'EQ',
            value: email
          }]
        }]
      })
    })

    if (!searchResponse.ok) {
      return {
        success: false,
        error: 'Failed to search for existing contact'
      }
    }

    const searchData = await searchResponse.json()
    
    if (searchData.results && searchData.results.length > 0) {
      const contactId = searchData.results[0].id
      
      // Update the existing contact
      const updateResponse = await fetch(`https://api.hubapi.com/crm/v3/objects/contacts/${contactId}`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ properties })
      })

      if (updateResponse.ok) {
        return {
          success: true,
          contactId: contactId
        }
      } else {
        return {
          success: false,
          error: 'Failed to update existing contact'
        }
      }
    } else {
      return {
        success: false,
        error: 'Contact not found for update'
      }
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Update failed'
    }
  }
}

/**
 * Create a timeline event for the contact (e.g., form submission, appointment scheduled)
 */
export async function createHubSpotTimelineEvent(
  contactId: string,
  eventType: string,
  eventDetails: Record<string, any>
): Promise<HubSpotResponse> {
  const hubspotApiKey = process.env.HUBSPOT_API_KEY
  
  if (!hubspotApiKey) {
    return {
      success: false,
      error: 'HubSpot API key not configured'
    }
  }

  try {
    // Create a note with event details
    const noteBody = Object.entries(eventDetails)
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n')

    const noteResponse = await fetch('https://api.hubapi.com/crm/v3/objects/notes', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${hubspotApiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        properties: {
          hs_timestamp: Date.now(),
          hs_note_body: `${eventType}\n\n${noteBody}`
        }
      })
    })

    if (!noteResponse.ok) {
      return {
        success: false,
        error: 'Failed to create timeline event'
      }
    }

    const noteData = await noteResponse.json()
    
    // Associate note with contact
    const associationResponse = await fetch(
      `https://api.hubapi.com/crm/v3/objects/notes/${noteData.id}/associations/contacts/${contactId}/note_to_contact`,
      {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${hubspotApiKey}`,
          'Content-Type': 'application/json'
        }
      }
    )

    if (associationResponse.ok || associationResponse.status === 204) {
      return {
        success: true
      }
    } else {
      return {
        success: false,
        error: 'Failed to associate event with contact'
      }
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to create timeline event'
    }
  }
}

/**
 * Validate HubSpot API key
 */
export async function validateHubSpotApiKey(): Promise<boolean> {
  const hubspotApiKey = process.env.HUBSPOT_API_KEY
  
  if (!hubspotApiKey) {
    return false
  }

  try {
    const response = await fetch('https://api.hubapi.com/crm/v3/objects/contacts?limit=1', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${hubspotApiKey}`
      }
    })

    return response.ok
  } catch (error) {
    console.error('Error validating HubSpot API key:', error)
    return false
  }
}