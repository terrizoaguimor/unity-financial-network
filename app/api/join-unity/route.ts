import { NextResponse } from 'next/server';
import { resend, emailConfig } from '@/lib/resend';
import { verifyTurnstileToken } from '@/lib/turnstile';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { 
      firstName,
      lastName,
      email, 
      phone,
      state,
      experience,
      hasLicense,
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
      <h2>${isSpanish ? 'Nueva Solicitud de Agente' : 'New Agent Application'}</h2>
      <h3>${isSpanish ? 'Información del Candidato' : 'Candidate Information'}</h3>
      <ul>
        <li><strong>${isSpanish ? 'Nombre' : 'Name'}:</strong> ${firstName} ${lastName}</li>
        <li><strong>${isSpanish ? 'Correo' : 'Email'}:</strong> ${email}</li>
        <li><strong>${isSpanish ? 'Teléfono' : 'Phone'}:</strong> ${phone}</li>
        <li><strong>${isSpanish ? 'Estado' : 'State'}:</strong> ${state}</li>
        <li><strong>${isSpanish ? 'Experiencia' : 'Experience'}:</strong> ${experience}</li>
        <li><strong>${isSpanish ? 'Tiene Licencia' : 'Has License'}:</strong> ${hasLicense}</li>
      </ul>
    `;

    // Email to candidate
    const candidateEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <img src="https://unityfinancialnetwork.com/images/logo-main.svg" alt="Unity Financial" style="width: 200px; margin-bottom: 20px;">
        <h2 style="color: #522784;">${isSpanish ? '¡Gracias por tu interés en Unity Financial!' : 'Thank you for your interest in Unity Financial!'}</h2>
        <p>${isSpanish ? 'Estimado/a' : 'Dear'} ${firstName},</p>
        <p>${isSpanish 
          ? 'Hemos recibido tu solicitud para unirte a nuestro equipo de agentes. Un reclutador revisará tu aplicación y te contactará pronto para discutir los próximos pasos.'
          : 'We have received your application to join our team of agents. A recruiter will review your application and contact you soon to discuss next steps.'
        }</p>
        <h3>${isSpanish ? 'Próximos Pasos:' : 'Next Steps:'}</h3>
        <ol>
          <li>${isSpanish ? 'Revisión de tu aplicación' : 'Review of your application'}</li>
          <li>${isSpanish ? 'Llamada inicial con nuestro equipo' : 'Initial call with our team'}</li>
          <li>${isSpanish ? 'Programa de entrenamiento' : 'Training program'}</li>
          <li>${isSpanish ? 'Proceso de licenciamiento (si aplica)' : 'Licensing process (if applicable)'}</li>
        </ol>
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
      subject: `${isSpanish ? 'Nueva Solicitud de Agente' : 'New Agent Application'}: ${firstName} ${lastName}`,
      html: adminEmailHtml,
      replyTo: email
    });

    // Send confirmation email to candidate
    await resend.emails.send({
      from: emailConfig.from,
      to: email,
      subject: isSpanish ? 'Aplicación Recibida - Unity Financial' : 'Application Received - Unity Financial',
      html: candidateEmailHtml,
      replyTo: emailConfig.replyTo
    });

    return NextResponse.json({ 
      success: true, 
      message: isSpanish 
        ? 'Tu aplicación ha sido recibida. Un reclutador te contactará próximamente.'
        : 'Your application has been received. A recruiter will contact you soon.'
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}