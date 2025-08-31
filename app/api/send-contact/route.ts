import { NextResponse } from 'next/server';
import { resend, emailConfig } from '@/lib/resend';
import { verifyTurnstileToken } from '@/lib/turnstile';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { 
      name, 
      email, 
      phone, 
      subject,
      message,
      language = 'en',
      turnstileToken
    } = body;

    // Verify Turnstile token
    if (!turnstileToken) {
      return NextResponse.json(
        { error: 'Verification token is required' },
        { status: 400 }
      );
    }

    const isTokenValid = await verifyTurnstileToken(turnstileToken);
    if (!isTokenValid) {
      return NextResponse.json(
        { error: 'Verification failed. Please try again.' },
        { status: 400 }
      );
    }

    const isSpanish = language === 'es';

    // Email to admin
    const adminEmailHtml = `
      <h2>${isSpanish ? 'Nuevo Mensaje de Contacto' : 'New Contact Message'}</h2>
      <h3>${isSpanish ? 'Información de Contacto' : 'Contact Information'}</h3>
      <ul>
        <li><strong>${isSpanish ? 'Nombre' : 'Name'}:</strong> ${name}</li>
        <li><strong>${isSpanish ? 'Correo' : 'Email'}:</strong> ${email}</li>
        <li><strong>${isSpanish ? 'Teléfono' : 'Phone'}:</strong> ${phone || 'No proporcionado'}</li>
        <li><strong>${isSpanish ? 'Asunto' : 'Subject'}:</strong> ${subject}</li>
      </ul>
      <h3>${isSpanish ? 'Mensaje' : 'Message'}</h3>
      <p>${message}</p>
    `;

    // Email to customer
    const customerEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <img src="https://unityfinancialnetwork.com/images/logo-main.svg" alt="Unity Financial" style="width: 200px; margin-bottom: 20px;">
        <h2 style="color: #522784;">${isSpanish ? '¡Gracias por contactarnos!' : 'Thank you for contacting us!'}</h2>
        <p>${isSpanish ? 'Estimado/a' : 'Dear'} ${name},</p>
        <p>${isSpanish 
          ? 'Hemos recibido tu mensaje y apreciamos que te hayas puesto en contacto con nosotros. Nuestro equipo revisará tu consulta y te responderá lo antes posible.'
          : 'We have received your message and appreciate you reaching out to us. Our team will review your inquiry and respond as soon as possible.'
        }</p>
        <h3>${isSpanish ? 'Resumen de tu mensaje:' : 'Summary of your message:'}</h3>
        <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <p><strong>${isSpanish ? 'Asunto' : 'Subject'}:</strong> ${subject}</p>
          <p><strong>${isSpanish ? 'Mensaje' : 'Message'}:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
        <p>${isSpanish 
          ? 'Normalmente respondemos en un plazo de 24 horas hábiles. Si tu consulta es urgente, no dudes en llamarnos directamente.'
          : 'We typically respond within 24 business hours. If your inquiry is urgent, please feel free to call us directly.'
        }</p>
        <p>
          <strong>${isSpanish ? 'Teléfono' : 'Phone'}:</strong> (786) 963-6392<br>
          <strong>${isSpanish ? 'Horario' : 'Hours'}:</strong> ${isSpanish ? 'Lunes a Viernes, 9:00 AM - 6:00 PM EST' : 'Monday to Friday, 9:00 AM - 6:00 PM EST'}
        </p>
        <hr style="border: 1px solid #eee; margin: 30px 0;">
        <p style="color: #666; font-size: 14px;">
          ${isSpanish 
            ? 'Este es un correo automático de confirmación. Por favor no respondas a este mensaje.'
            : 'This is an automated confirmation email. Please do not reply to this message.'
          }
        </p>
      </div>
    `;

    // Send email to admin
    await resend.emails.send({
      from: emailConfig.from,
      to: emailConfig.adminEmail,
      subject: `${isSpanish ? 'Nuevo Contacto' : 'New Contact'}: ${subject} - Unity Financial`,
      html: adminEmailHtml,
      replyTo: email
    });

    // Send confirmation email to customer
    await resend.emails.send({
      from: emailConfig.from,
      to: email,
      subject: isSpanish ? 'Mensaje Recibido - Unity Financial' : 'Message Received - Unity Financial',
      html: customerEmailHtml,
      replyTo: emailConfig.replyTo
    });

    return NextResponse.json({ 
      success: true, 
      message: isSpanish 
        ? 'Tu mensaje ha sido recibido. Un asesor te contactará próximamente.'
        : 'Your message has been received. An advisor will contact you soon.'
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}