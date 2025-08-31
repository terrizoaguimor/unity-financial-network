/**
 * SMS Send API Route
 * 
 * Sends SMS notifications for:
 * - Policy reminders
 * - Appointment confirmations
 * - Commission notifications
 * - Marketing campaigns
 * 
 * @route POST /api/sms/send
 */

import { NextRequest, NextResponse } from 'next/server';
import { sendSMS, sendBulkSMS, formatPhoneNumber } from '@/lib/twilio';

export async function POST(request: NextRequest) {
  try {
    const { to, message, bulk = false, recipients, variables } = await request.json();
    
    // Validate input
    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }
    
    // Handle bulk SMS
    if (bulk && recipients) {
      const formattedRecipients = recipients
        .map((phone: string) => formatPhoneNumber(phone))
        .filter(Boolean) as string[];
      
      if (formattedRecipients.length === 0) {
        return NextResponse.json(
          { error: 'No valid phone numbers provided' },
          { status: 400 }
        );
      }
      
      const results = await sendBulkSMS(formattedRecipients, message, variables);
      
      return NextResponse.json({
        success: true,
        bulk: true,
        results,
        total: results.length,
        sent: results.filter(r => r.status === 'sent').length,
        failed: results.filter(r => r.status === 'failed').length
      });
    }
    
    // Handle single SMS
    if (!to) {
      return NextResponse.json(
        { error: 'Recipient phone number is required' },
        { status: 400 }
      );
    }
    
    const formattedPhone = formatPhoneNumber(to);
    if (!formattedPhone) {
      return NextResponse.json(
        { error: 'Invalid phone number format' },
        { status: 400 }
      );
    }
    
    const messageSid = await sendSMS(formattedPhone, message);
    
    return NextResponse.json({
      success: true,
      messageSid,
      to: formattedPhone
    });
    
  } catch (error) {
    console.error('SMS send error:', error);
    return NextResponse.json(
      { error: 'Failed to send SMS' },
      { status: 500 }
    );
  }
}