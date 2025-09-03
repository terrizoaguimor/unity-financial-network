/**
 * DigitalOcean Function to create HubSpot leads from Unity Financial appointment forms
 * This function receives appointment data and creates a lead in HubSpot CRM
 */

const https = require('https');

// HubSpot API configuration
const HUBSPOT_API_KEY = process.env.HUBSPOT_API_KEY;
const HUBSPOT_API_URL = 'api.hubapi.com';

/**
 * Main function handler
 * @param {Object} args - Input arguments from the request
 * @returns {Object} Response object with success/error status
 */
async function main(args) {
    // CORS headers for browser requests
    const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
    };

    // Handle OPTIONS request for CORS
    if (args.__ow_method === 'options') {
        return {
            statusCode: 200,
            headers
        };
    }

    // Check if HubSpot API key is configured
    if (!HUBSPOT_API_KEY) {
        console.error('HubSpot API key not found in environment variables');
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({
                success: false,
                error: 'HubSpot API key not configured'
            })
        };
    }
    
    console.log('HubSpot API key length:', HUBSPOT_API_KEY ? HUBSPOT_API_KEY.length : 0);

    try {
        // Extract appointment data
        const {
            firstName,
            lastName,
            email,
            phone,
            appointmentType,
            appointmentDate,
            appointmentTime,
            preferredContact,
            message,
            language = 'en'
        } = args;

        // Validate required fields
        if (!email || !firstName || !lastName) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({
                    success: false,
                    error: 'Missing required fields: email, firstName, lastName'
                })
            };
        }

        // Prepare HubSpot contact properties (only standard properties)
        const contactProperties = {
            email: email,
            firstname: firstName,
            lastname: lastName,
            phone: phone || '',
            lifecyclestage: 'lead',
            hs_lead_status: 'NEW'
        };

        // Create a comprehensive note with all appointment details
        const appointmentNote = `APPOINTMENT REQUEST FROM WEBSITE

Contact Information:
- Name: ${firstName} ${lastName}
- Email: ${email}
- Phone: ${phone || 'Not provided'}
- Language: ${language === 'es' ? 'Spanish' : 'English'}

Appointment Details:
- Type: ${appointmentType === 'health' ? 'Health Insurance' : appointmentType === 'life' ? 'Life Insurance' : appointmentType || 'Not specified'}
- Date: ${appointmentDate || 'Not specified'}
- Time: ${appointmentTime || 'Not specified'}
- Preferred Contact Method: ${preferredContact || 'Not specified'}

${message ? `Additional Message:\n${message}` : ''}

Source: Unity Financial Network - Schedule Form
Submitted: ${new Date().toISOString()}`;

        // Create contact in HubSpot
        const contactResult = await createHubSpotContact(contactProperties);
        
        if (!contactResult.success) {
            throw new Error(contactResult.error || 'Failed to create HubSpot contact');
        }

        // If contact was created, add the appointment details as a note
        if (contactResult.contactId) {
            await createHubSpotNote(contactResult.contactId, appointmentNote);
        }

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({
                success: true,
                message: 'Lead created successfully in HubSpot',
                contactId: contactResult.contactId
            })
        };

    } catch (error) {
        console.error('Error creating HubSpot lead:', error);
        
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({
                success: false,
                error: 'Failed to create lead in HubSpot',
                details: error.message
            })
        };
    }
}

/**
 * Create a contact in HubSpot
 * @param {Object} properties - Contact properties
 * @returns {Promise<Object>} Result object with success status and contact ID
 */
function createHubSpotContact(properties) {
    return new Promise((resolve, reject) => {
        // Filter out empty properties
        const cleanProperties = Object.entries(properties)
            .filter(([_, value]) => value !== '' && value !== null && value !== undefined)
            .reduce((acc, [key, value]) => {
                acc[key] = value;
                return acc;
            }, {});

        console.log('Sending to HubSpot:', cleanProperties);

        const data = JSON.stringify({
            properties: cleanProperties
        });

        const options = {
            hostname: HUBSPOT_API_URL,
            path: '/crm/v3/objects/contacts',
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${HUBSPOT_API_KEY}`,
                'Content-Type': 'application/json',
                'Content-Length': data.length
            }
        };

        const req = https.request(options, (res) => {
            let responseData = '';

            res.on('data', (chunk) => {
                responseData += chunk;
            });

            res.on('end', () => {
                try {
                    const response = JSON.parse(responseData);
                    
                    if (res.statusCode === 201 || res.statusCode === 200) {
                        resolve({
                            success: true,
                            contactId: response.id,
                            data: response
                        });
                    } else if (res.statusCode === 409) {
                        // Contact already exists, try to update
                        const existingEmail = properties.email;
                        updateExistingContact(existingEmail, cleanProperties)
                            .then(resolve)
                            .catch(reject);
                    } else {
                        console.error('HubSpot API Error:', res.statusCode, response);
                        resolve({
                            success: false,
                            error: `HubSpot API error: ${res.statusCode}`,
                            details: response
                        });
                    }
                } catch (error) {
                    reject(error);
                }
            });
        });

        req.on('error', (error) => {
            reject(error);
        });

        req.write(data);
        req.end();
    });
}

/**
 * Update an existing contact in HubSpot
 * @param {string} email - Contact email
 * @param {Object} properties - Properties to update
 * @returns {Promise<Object>} Result object
 */
function updateExistingContact(email, properties) {
    return new Promise((resolve, reject) => {
        // First, search for the contact by email
        const searchData = JSON.stringify({
            filterGroups: [{
                filters: [{
                    propertyName: 'email',
                    operator: 'EQ',
                    value: email
                }]
            }]
        });

        const searchOptions = {
            hostname: HUBSPOT_API_URL,
            path: '/crm/v3/objects/contacts/search',
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${HUBSPOT_API_KEY}`,
                'Content-Type': 'application/json',
                'Content-Length': searchData.length
            }
        };

        const searchReq = https.request(searchOptions, (res) => {
            let responseData = '';

            res.on('data', (chunk) => {
                responseData += chunk;
            });

            res.on('end', () => {
                try {
                    const response = JSON.parse(responseData);
                    
                    if (response.results && response.results.length > 0) {
                        const contactId = response.results[0].id;
                        
                        // Update the existing contact
                        const updateData = JSON.stringify({
                            properties: properties
                        });

                        const updateOptions = {
                            hostname: HUBSPOT_API_URL,
                            path: `/crm/v3/objects/contacts/${contactId}`,
                            method: 'PATCH',
                            headers: {
                                'Authorization': `Bearer ${HUBSPOT_API_KEY}`,
                                'Content-Type': 'application/json',
                                'Content-Length': updateData.length
                            }
                        };

                        const updateReq = https.request(updateOptions, (updateRes) => {
                            let updateResponseData = '';

                            updateRes.on('data', (chunk) => {
                                updateResponseData += chunk;
                            });

                            updateRes.on('end', () => {
                                const updateResponse = JSON.parse(updateResponseData);
                                resolve({
                                    success: true,
                                    contactId: contactId,
                                    updated: true,
                                    data: updateResponse
                                });
                            });
                        });

                        updateReq.on('error', reject);
                        updateReq.write(updateData);
                        updateReq.end();
                    } else {
                        resolve({
                            success: false,
                            error: 'Contact not found for update'
                        });
                    }
                } catch (error) {
                    reject(error);
                }
            });
        });

        searchReq.on('error', reject);
        searchReq.write(searchData);
        searchReq.end();
    });
}

/**
 * Create a note in HubSpot and associate it with a contact
 * @param {string} contactId - HubSpot contact ID
 * @param {string} noteBody - Note body text
 * @returns {Promise<Object>} Result object
 */
function createHubSpotNote(contactId, noteBody) {
    return new Promise((resolve, reject) => {
        const data = JSON.stringify({
            properties: {
                hs_timestamp: Date.now(),
                hs_note_body: noteBody
            }
        });

        const options = {
            hostname: HUBSPOT_API_URL,
            path: '/crm/v3/objects/notes',
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${HUBSPOT_API_KEY}`,
                'Content-Type': 'application/json',
                'Content-Length': data.length
            }
        };

        const req = https.request(options, (res) => {
            let responseData = '';

            res.on('data', (chunk) => {
                responseData += chunk;
            });

            res.on('end', () => {
                try {
                    const response = JSON.parse(responseData);
                    
                    if (res.statusCode === 201 || res.statusCode === 200) {
                        // Associate note with contact
                        associateNoteWithContact(response.id, contactId)
                            .then(() => resolve({ success: true, noteId: response.id }))
                            .catch(reject);
                    } else {
                        resolve({
                            success: false,
                            error: `Failed to create note: ${res.statusCode}`
                        });
                    }
                } catch (error) {
                    reject(error);
                }
            });
        });

        req.on('error', reject);
        req.write(data);
        req.end();
    });
}

/**
 * Associate a note with a contact in HubSpot
 * @param {string} noteId - Note ID
 * @param {string} contactId - Contact ID
 * @returns {Promise<Object>} Result object
 */
function associateNoteWithContact(noteId, contactId) {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: HUBSPOT_API_URL,
            path: `/crm/v3/objects/notes/${noteId}/associations/contacts/${contactId}/note_to_contact`,
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${HUBSPOT_API_KEY}`,
                'Content-Type': 'application/json'
            }
        };

        const req = https.request(options, (res) => {
            res.on('data', () => {}); // Consume response
            res.on('end', () => {
                if (res.statusCode === 200 || res.statusCode === 204) {
                    resolve({ success: true });
                } else {
                    resolve({ success: false, error: `Association failed: ${res.statusCode}` });
                }
            });
        });

        req.on('error', reject);
        req.end();
    });
}

// Export the main function
exports.main = main;