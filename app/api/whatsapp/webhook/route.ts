/**
 * WhatsApp Webhook API Route
 * 
 * Handles incoming WhatsApp messages from Twilio
 * Processes them with AI and responds accordingly
 * 
 * @route POST /api/whatsapp/webhook
 */

import { NextRequest, NextResponse } from 'next/server';
import { handleWhatsAppWebhook } from '@/lib/twilio';
import { storeWhatsAppMessage } from '@/lib/supabase';
import { processAgentConversation } from '@/lib/elevenlabs-api';

/**
 * Handle POST requests from Twilio WhatsApp webhook
 */
export async function POST(request: NextRequest) {
  try {
    // Parse the incoming webhook data
    const formData = await request.formData();
    const body = Object.fromEntries(formData);
    
    console.log('WhatsApp Webhook received:', body);
    
    const { From, Body: messageBody, MessageSid, ProfileName } = body;
    
    // Process with AI if it's a text message
    if (messageBody) {
      // Get AI response using ElevenLabs
      const aiResponse = await processAgentConversation(
        messageBody as string,
        'INSURANCE_SALES',
        From as string
      );
      
      // Store conversation in Supabase
      try {
        await storeWhatsAppMessage(From as string, messageBody as string, 'user');
        await storeWhatsAppMessage(From as string, aiResponse.text, 'assistant');
      } catch (dbError) {
        console.error('Database storage error:', dbError);
      }
      
      // Send response via Twilio
      const result = await handleWhatsAppWebhook(body);
      
      return NextResponse.json(result);
    }
    
    // Return success for non-text messages
    return NextResponse.json({ 
      success: true, 
      message: 'Webhook processed' 
    });
    
  } catch (error) {
    console.error('WhatsApp webhook error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

/**
 * Handle GET requests for webhook verification
 */
export async function GET(request: NextRequest) {
  // Twilio webhook verification
  return NextResponse.json({ 
    status: 'active',
    webhook: '/api/whatsapp/webhook',
    service: 'Unity Financial WhatsApp Bot'
  });
}