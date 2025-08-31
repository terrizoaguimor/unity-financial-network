import { NextResponse } from 'next/server';
import { resend, emailConfig } from '@/lib/resend';

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
      language = 'en'
    } = body;

    const isSpanish = language === 'es';

    // Email to admin
    const adminEmailHtml = `
      <h2>${isSpanish ? 'Nueva Solicitud para Unirse como Agente' : 'New Agent Application'}</h2>
      <h3>${isSpanish ? 'Información del Candidato' : 'Candidate Information'}</h3>
      <ul>
        <li><strong>${isSpanish ? 'Nombre' : 'Name'}:</strong> ${firstName} ${lastName}</li>
        <li><strong>${isSpanish ? 'Correo' : 'Email'}:</strong> ${email}</li>
        <li><strong>${isSpanish ? 'Teléfono' : 'Phone'}:</strong> ${phone}</li>
        <li><strong>${isSpanish ? 'Estado' : 'State'}:</strong> ${state}</li>
        <li><strong>${isSpanish ? 'Experiencia' : 'Experience'}:</strong> ${experience}</li>
        <li><strong>${isSpanish ? 'Licencia de Seguros' : 'Insurance License'}:</strong> ${hasLicense === 'yes' ? (isSpanish ? 'Sí' : 'Yes') : (isSpanish ? 'No' : 'No')}</li>
      </ul>
    `;

    // Email to candidate
    const candidateEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <img src="https://unityfinancialnetwork.com/images/logo-main.svg" alt="Unity Financial" style="width: 200px; margin-bottom: 20px;">
        <h2 style="color: #522784;">${isSpanish ? '¡Bienvenido a Unity Financial Network!' : 'Welcome to Unity Financial Network!'}</h2>
        <p>${isSpanish ? 'Estimado/a' : 'Dear'} ${firstName},</p>
        <p>${isSpanish 
          ? 'Gracias por tu interés en unirte a nuestro equipo de agentes profesionales. Hemos recibido tu aplicación y nuestro equipo de reclutamiento la está revisando.'
          : 'Thank you for your interest in joining our team of professional agents. We have received your application and our recruitment team is reviewing it.'
        }</p>
        <h3>${isSpanish ? 'Próximos pasos:' : 'Next steps:'}</h3>
        <ol>
          <li>${isSpanish 
            ? 'Un representante de nuestro equipo se pondrá en contacto contigo en las próximas 24-48 horas'
            : 'A representative from our team will contact you within the next 24-48 hours'
          }</li>
          <li>${isSpanish 
            ? 'Prepararemos una sesión informativa sobre nuestro programa de agentes'
            : 'We will prepare an informational session about our agent program'
          }</li>
          <li>${isSpanish 
            ? 'Si calificas, te invitaremos a nuestro proceso de entrenamiento'
            : 'If you qualify, we will invite you to our training process'
          }</li>
        </ol>
        <p>${isSpanish 
          ? 'Unity Financial Network ofrece:'
          : 'Unity Financial Network offers:'
        }</p>
        <ul>
          <li>${isSpanish ? 'Comisiones competitivas' : 'Competitive commissions'}</li>
          <li>${isSpanish ? 'Entrenamiento continuo' : 'Continuous training'}</li>
          <li>${isSpanish ? 'Soporte completo' : 'Full support'}</li>
          <li>${isSpanish ? 'Herramientas digitales avanzadas' : 'Advanced digital tools'}</li>
          <li>${isSpanish ? 'Flexibilidad de horario' : 'Schedule flexibility'}</li>
        </ul>
        <p>${isSpanish 
          ? 'Si tienes alguna pregunta, no dudes en contactarnos:'
          : 'If you have any questions, feel free to contact us:'
        }</p>
        <p>
          <strong>${isSpanish ? 'Teléfono' : 'Phone'}:</strong> (786) 577-2260<br>
          <strong>${isSpanish ? 'Correo' : 'Email'}:</strong> recruiting@unityfinancialnetwork.com
        </p>
        <hr style="border: 1px solid #eee; margin: 30px 0;">
        <p style="color: #666; font-size: 14px;">
          ${isSpanish 
            ? 'Este es un correo automático. Por favor no respondas a este mensaje.'
            : 'This is an automated email. Please do not reply to this message.'
          }
        </p>
      </div>
    `;

    // Send email to admin
    await resend.emails.send({
      from: emailConfig.from,
      to: emailConfig.adminEmail,
      subject: isSpanish ? 'Nueva Aplicación de Agente - Unity Financial' : 'New Agent Application - Unity Financial',
      html: adminEmailHtml,
      replyTo: email
    });

    // Send confirmation email to candidate
    await resend.emails.send({
      from: emailConfig.from,
      to: email,
      subject: isSpanish ? 'Aplicación Recibida - Unity Financial Network' : 'Application Received - Unity Financial Network',
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