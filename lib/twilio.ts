/**
 * Twilio Integration Module
 * 
 * This module handles all Twilio communications including:
 * - SMS messaging
 * - WhatsApp Business API
 * - Voice calls
 * - Automated notifications
 * 
 * Use Cases in Unity Financial:
 * 1. WhatsApp Bot for customer inquiries
 * 2. SMS notifications for policy renewals
 * 3. Appointment reminders
 * 4. Two-factor authentication
 * 5. Emergency alerts to agents
 * 
 * @module lib/twilio
 */

import twilio from 'twilio';

// Environment variables
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
const twilioWhatsAppNumber = process.env.TWILIO_WHATSAPP_NUMBER || 'whatsapp:+14155238886';

/**
 * Twilio client instance
 * Initialize only if credentials are provided
 */
export const twilioClient = accountSid && authToken 
  ? twilio(accountSid, authToken)
  : null;

/**
 * Message Templates for common scenarios
 */
export const MessageTemplates = {
  WELCOME: {
    es: '¡Hola! 👋 Bienvenido a Unity Financial Network. ¿En qué podemos ayudarte hoy?\n\n1️⃣ Cotizar seguro\n2️⃣ Estado de póliza\n3️⃣ Hablar con agente\n4️⃣ Información general',
    en: 'Hello! 👋 Welcome to Unity Financial Network. How can we help you today?\n\n1️⃣ Get a quote\n2️⃣ Policy status\n3️⃣ Speak to agent\n4️⃣ General information'
  },
  POLICY_REMINDER: {
    es: 'Recordatorio: Tu póliza #{policyId} vence en {days} días. ¿Deseas renovarla?',
    en: 'Reminder: Your policy #{policyId} expires in {days} days. Would you like to renew?'
  },
  APPOINTMENT_CONFIRMATION: {
    es: 'Tu cita con {agentName} está confirmada para {date} a las {time}.',
    en: 'Your appointment with {agentName} is confirmed for {date} at {time}.'
  },
  COMMISSION_PAID: {
    es: 'Tu comisión de ${amount} ha sido procesada y estará disponible en 2-3 días hábiles.',
    en: 'Your commission of ${amount} has been processed and will be available in 2-3 business days.'
  }
};

/**
 * Send SMS message
 * @param to - Recipient phone number (E.164 format)
 * @param body - Message content
 * @returns Promise with message SID
 */
export async function sendSMS(to: string, body: string) {
  if (!twilioClient || !twilioPhoneNumber) {
    throw new Error('Twilio not configured');
  }

  try {
    const message = await twilioClient.messages.create({
      body,
      from: twilioPhoneNumber,
      to
    });

    console.log(`SMS sent successfully: ${message.sid}`);
    return message.sid;
  } catch (error) {
    console.error('Error sending SMS:', error);
    throw error;
  }
}

/**
 * Send WhatsApp message
 * @param to - Recipient WhatsApp number (E.164 format)
 * @param body - Message content
 * @param mediaUrl - Optional media URL for images/documents
 * @returns Promise with message SID
 */
export async function sendWhatsAppMessage(
  to: string, 
  body: string, 
  mediaUrl?: string
) {
  if (!twilioClient) {
    throw new Error('Twilio not configured');
  }

  try {
    const messageOptions: any = {
      from: twilioWhatsAppNumber,
      to: to.startsWith('whatsapp:') ? to : `whatsapp:${to}`,
      body
    };

    if (mediaUrl) {
      messageOptions.mediaUrl = [mediaUrl];
    }

    const message = await twilioClient.messages.create(messageOptions);
    
    console.log(`WhatsApp message sent: ${message.sid}`);
    return message.sid;
  } catch (error) {
    console.error('Error sending WhatsApp message:', error);
    throw error;
  }
}

/**
 * WhatsApp Bot Response Handler
 * Processes incoming WhatsApp messages and returns appropriate responses
 * @param message - Incoming message text
 * @param from - Sender's phone number
 * @param language - User's preferred language
 * @returns Response object with message and suggested actions
 */
export async function handleWhatsAppBot(
  message: string,
  from: string,
  language: 'es' | 'en' = 'es'
) {
  const lowerMessage = message.toLowerCase().trim();
  
  // Menu options handling
  if (lowerMessage === 'hola' || lowerMessage === 'hello' || lowerMessage === 'menu') {
    return {
      message: MessageTemplates.WELCOME[language],
      actions: ['quote', 'policy', 'agent', 'info']
    };
  }

  // Quote request
  if (lowerMessage.includes('cotizar') || lowerMessage.includes('quote') || lowerMessage === '1') {
    const response = language === 'es' 
      ? '¿Qué tipo de seguro necesitas?\n\n📱 Vida\n🚗 Auto\n🏠 Hogar\n🏥 Salud\n🏢 Negocio\n\nResponde con el tipo de seguro.'
      : 'What type of insurance do you need?\n\n📱 Life\n🚗 Auto\n🏠 Home\n🏥 Health\n🏢 Business\n\nReply with the insurance type.';
    
    return {
      message: response,
      actions: ['life', 'auto', 'home', 'health', 'business'],
      context: 'quote_selection'
    };
  }

  // Policy status
  if (lowerMessage.includes('póliza') || lowerMessage.includes('policy') || lowerMessage === '2') {
    const response = language === 'es'
      ? 'Por favor, proporciona tu número de póliza o tu número de identificación.'
      : 'Please provide your policy number or ID number.';
    
    return {
      message: response,
      context: 'policy_lookup',
      requiresInput: true
    };
  }

  // Agent contact
  if (lowerMessage.includes('agente') || lowerMessage.includes('agent') || lowerMessage === '3') {
    const response = language === 'es'
      ? 'Te estamos conectando con un agente. Por favor espera...\n\n⏱️ Tiempo estimado: 2-3 minutos\n\nMientras tanto, ¿puedes compartir tu nombre y el motivo de tu consulta?'
      : 'We\'re connecting you with an agent. Please wait...\n\n⏱️ Estimated time: 2-3 minutes\n\nMeanwhile, can you share your name and reason for consultation?';
    
    return {
      message: response,
      escalate: true,
      context: 'agent_transfer'
    };
  }

  // Default response for unrecognized input
  const defaultResponse = language === 'es'
    ? 'No entendí tu mensaje. Por favor selecciona una opción:\n\n1️⃣ Cotizar seguro\n2️⃣ Estado de póliza\n3️⃣ Hablar con agente\n4️⃣ Información general'
    : 'I didn\'t understand your message. Please select an option:\n\n1️⃣ Get a quote\n2️⃣ Policy status\n3️⃣ Speak to agent\n4️⃣ General information';

  return {
    message: defaultResponse,
    actions: ['quote', 'policy', 'agent', 'info']
  };
}

/**
 * Send bulk SMS campaign
 * @param recipients - Array of phone numbers
 * @param message - Message template
 * @param variables - Variables to replace in template
 * @returns Promise with results
 */
export async function sendBulkSMS(
  recipients: string[],
  message: string,
  variables?: Record<string, any>
) {
  if (!twilioClient) {
    throw new Error('Twilio not configured');
  }

  const results = [];
  
  for (const recipient of recipients) {
    try {
      let personalizedMessage = message;
      
      // Replace variables in message
      if (variables && variables[recipient]) {
        Object.entries(variables[recipient]).forEach(([key, value]) => {
          personalizedMessage = personalizedMessage.replace(`{${key}}`, String(value));
        });
      }

      const sid = await sendSMS(recipient, personalizedMessage);
      results.push({ recipient, status: 'sent', sid });
    } catch (error) {
      results.push({ recipient, status: 'failed', error: error instanceof Error ? error.message : 'Unknown error' });
    }
  }

  return results;
}

/**
 * Initialize WhatsApp webhook for receiving messages
 * This should be called from an API route
 * @param body - Webhook body from Twilio
 * @returns Response to send back to Twilio
 */
export async function handleWhatsAppWebhook(body: any) {
  const { From, Body, MessageSid } = body;
  
  console.log(`Received WhatsApp message from ${From}: ${Body}`);
  
  try {
    // Process the message with the bot
    const response = await handleWhatsAppBot(Body, From);
    
    // Send the response
    await sendWhatsAppMessage(From, response.message);
    
    // Store conversation in database (integrate with Supabase)
    // await storeWhatsAppMessage(From, Body, 'user');
    // await storeWhatsAppMessage(From, response.message, 'assistant');
    
    // If escalation is needed, notify an agent
    if (response.escalate) {
      // Notify agent via SMS or internal system
      await notifyAgent(From, Body);
    }
    
    return { success: true, messageSid: MessageSid };
  } catch (error) {
    console.error('Error handling WhatsApp webhook:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

/**
 * Notify agent about customer requiring assistance
 * @param customerPhone - Customer's phone number
 * @param message - Customer's message
 */
async function notifyAgent(customerPhone: string, message: string) {
  // This would typically look up the next available agent
  // For now, we'll use a hardcoded agent notification system
  
  const agentPhone = process.env.AGENT_NOTIFICATION_PHONE;
  if (agentPhone) {
    const notification = `🚨 New customer needs assistance!\n\nPhone: ${customerPhone}\nMessage: ${message}\n\nPlease respond ASAP.`;
    await sendSMS(agentPhone, notification);
  }
}

/**
 * Verify phone number format and validity
 * @param phoneNumber - Phone number to verify
 * @returns Formatted phone number or null if invalid
 */
export function formatPhoneNumber(phoneNumber: string): string | null {
  // Remove all non-numeric characters
  const cleaned = phoneNumber.replace(/\D/g, '');
  
  // Check if it's a valid US number (10 digits)
  if (cleaned.length === 10) {
    return `+1${cleaned}`;
  }
  
  // Check if it already has country code
  if (cleaned.length === 11 && cleaned.startsWith('1')) {
    return `+${cleaned}`;
  }
  
  // Check for international numbers
  if (cleaned.length > 10 && cleaned.startsWith('52')) {
    // Mexican number
    return `+${cleaned}`;
  }
  
  return null;
}