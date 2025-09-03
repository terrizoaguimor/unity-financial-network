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
      dateOfBirth,
      state,
      insuranceType,
      coverageAmount,
      hasMedicalConditions,
      isSmoker,
      monthlyBudget,
      turnstileToken,
      language = 'en'
    } = body;

    // Verify Turnstile token
    if (!turnstileToken || !await verifyTurnstileToken(turnstileToken)) {
      return NextResponse.json(
        { success: false, message: 'Security verification failed' },
        { status: 400 }
      );
    }

    const isSpanish = language === 'es';

    // Email to admin
    const adminEmailHtml = `
      <h2>${isSpanish ? 'Nueva Solicitud de Cotización' : 'New Quote Request'}</h2>
      <h3>${isSpanish ? 'Información Personal' : 'Personal Information'}</h3>
      <ul>
        <li><strong>${isSpanish ? 'Nombre' : 'Name'}:</strong> ${firstName} ${lastName}</li>
        <li><strong>${isSpanish ? 'Correo' : 'Email'}:</strong> ${email}</li>
        <li><strong>${isSpanish ? 'Teléfono' : 'Phone'}:</strong> ${phone}</li>
        <li><strong>${isSpanish ? 'Fecha de Nacimiento' : 'Date of Birth'}:</strong> ${dateOfBirth}</li>
        <li><strong>${isSpanish ? 'Estado' : 'State'}:</strong> ${state}</li>
      </ul>
      <h3>${isSpanish ? 'Detalles del Seguro' : 'Insurance Details'}</h3>
      <ul>
        <li><strong>${isSpanish ? 'Tipo de Seguro' : 'Insurance Type'}:</strong> ${insuranceType}</li>
        <li><strong>${isSpanish ? 'Monto de Cobertura' : 'Coverage Amount'}:</strong> ${coverageAmount}</li>
        <li><strong>${isSpanish ? 'Condiciones Médicas' : 'Medical Conditions'}:</strong> ${hasMedicalConditions || isSpanish ? 'No especificado' : 'Not specified'}</li>
        <li><strong>${isSpanish ? 'Fumador' : 'Smoker'}:</strong> ${isSmoker === 'yes' ? (isSpanish ? 'Sí' : 'Yes') : (isSpanish ? 'No' : 'No')}</li>
        <li><strong>${isSpanish ? 'Presupuesto Mensual' : 'Monthly Budget'}:</strong> ${monthlyBudget}</li>
      </ul>
    `;

    // Email to customer
    const customerEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <img src="https://unityfinancialnetwork.com/images/logo-main.svg" alt="Unity Financial" style="width: 200px; margin-bottom: 20px;">
        <h2 style="color: #522784;">${isSpanish ? '¡Gracias por tu solicitud!' : 'Thank you for your request!'}</h2>
        <p>${isSpanish ? 'Estimado/a' : 'Dear'} ${firstName},</p>
        <p>${isSpanish 
          ? 'Hemos recibido tu solicitud de cotización de seguro. Nuestro equipo está revisando tu información y un asesor especializado se pondrá en contacto contigo próximamente.'
          : 'We have received your insurance quote request. Our team is reviewing your information and a specialized advisor will contact you soon.'
        }</p>
        <h3>${isSpanish ? 'Resumen de tu solicitud:' : 'Summary of your request:'}</h3>
        <ul>
          <li><strong>${isSpanish ? 'Tipo de Seguro' : 'Insurance Type'}:</strong> ${insuranceType}</li>
          <li><strong>${isSpanish ? 'Monto de Cobertura' : 'Coverage Amount'}:</strong> ${coverageAmount}</li>
          <li><strong>${isSpanish ? 'Presupuesto Mensual' : 'Monthly Budget'}:</strong> ${monthlyBudget}</li>
        </ul>
        <p>${isSpanish 
          ? 'Si tienes alguna pregunta mientras tanto, no dudes en contactarnos al:'
          : 'If you have any questions in the meantime, feel free to contact us at:'
        }</p>
        <p>
          <strong>${isSpanish ? 'Teléfono' : 'Phone'}:</strong> (786) 828-5576<br>
          <strong>${isSpanish ? 'Correo' : 'Email'}:</strong> hello@unityfinancialnetwork.com
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
      subject: isSpanish ? 'Nueva Solicitud de Cotización - Unity Financial' : 'New Quote Request - Unity Financial',
      html: adminEmailHtml,
      replyTo: email
    });

    // Send confirmation email to customer
    await resend.emails.send({
      from: emailConfig.from,
      to: email,
      subject: isSpanish ? 'Confirmación de Solicitud - Unity Financial' : 'Request Confirmation - Unity Financial',
      html: customerEmailHtml,
      replyTo: emailConfig.replyTo
    });

    return NextResponse.json({ 
      success: true, 
      message: isSpanish 
        ? 'Tu solicitud ha sido recibida. Un asesor te contactará próximamente.'
        : 'Your request has been received. An advisor will contact you soon.'
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}