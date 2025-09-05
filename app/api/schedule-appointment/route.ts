import { NextResponse } from 'next/server'
import { resend, emailConfig } from '@/lib/resend'
import { verifyTurnstileToken } from '@/lib/turnstile'
import { sendToHubSpot } from '@/lib/hubspot'

export async function POST(request: Request) {
  try {
    const body = await request.json()
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
      turnstileToken,
      language = 'en',
      agent = null
    } = body

    // Verify Turnstile token
    if (!turnstileToken || !await verifyTurnstileToken(turnstileToken)) {
      return NextResponse.json(
        { success: false, message: 'Security verification failed' },
        { status: 400 }
      )
    }

    const isSpanish = language === 'es'

    // Format appointment date for display
    const dateObj = new Date(appointmentDate + 'T00:00:00')
    const formattedDate = dateObj.toLocaleDateString(isSpanish ? 'es-ES' : 'en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })

    // Determine department based on appointment type and agent
    let department, departmentEmail, agentInfo = null

    if (agent === 'alba-estevez') {
      department = isSpanish ? 'Alba Estévez - Agente de Seguros' : 'Alba Estévez - Insurance Agent'
      departmentEmail = 'alba.estevez@unityfinancialnetwork.com'
      agentInfo = {
        name: 'Alba Estévez',
        email: 'alba.estevez@unityfinancialnetwork.com'
      }
    } else {
      department = appointmentType === 'health' 
        ? (isSpanish ? 'Departamento de Seguros de Salud' : 'Health Insurance Department')
        : (isSpanish ? 'Departamento de Seguros de Vida' : 'Life Insurance Department')
      
      departmentEmail = appointmentType === 'health' 
        ? 'health@unityfinancialnetwork.com'
        : 'life@unityfinancialnetwork.com'
    }

    // Preferred contact method display
    const contactMethodDisplay = {
      phone: isSpanish ? 'Llamada Telefónica' : 'Phone Call',
      email: isSpanish ? 'Correo Electrónico' : 'Email',
      video: isSpanish ? 'Videollamada' : 'Video Call'
    }[preferredContact as 'phone' | 'email' | 'video'] || preferredContact

    // Email to customer
    const customerEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <img src="https://unityfinancialnetwork.com/images/logo-main.svg" alt="Unity Financial" style="width: 200px;">
        </div>
        
        <div style="background: linear-gradient(135deg, #522784 0%, #7c3aed 100%); color: white; padding: 30px; border-radius: 15px; margin-bottom: 30px;">
          <h1 style="margin: 0 0 10px 0; font-size: 28px;">
            ${isSpanish ? '¡Cita Confirmada!' : 'Appointment Confirmed!'}
          </h1>
          <p style="margin: 0; font-size: 18px; opacity: 0.95;">
            ${isSpanish 
              ? 'Tu consulta de seguro está programada' 
              : 'Your insurance consultation is scheduled'}
          </p>
        </div>

        <div style="background-color: #f9f9f9; padding: 25px; border-radius: 10px; margin-bottom: 25px;">
          <h2 style="color: #522784; margin-top: 0; margin-bottom: 20px;">
            ${isSpanish ? 'Detalles de tu Cita' : 'Appointment Details'}
          </h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0;">
                <strong style="color: #666;">${isSpanish ? 'Fecha:' : 'Date:'}</strong>
              </td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; text-align: right;">
                ${formattedDate}
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0;">
                <strong style="color: #666;">${isSpanish ? 'Hora:' : 'Time:'}</strong>
              </td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; text-align: right;">
                ${appointmentTime} EST
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0;">
                <strong style="color: #666;">${isSpanish ? 'Tipo de Consulta:' : 'Consultation Type:'}</strong>
              </td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; text-align: right;">
                ${appointmentType === 'health' 
                  ? (isSpanish ? 'Seguro de Salud' : 'Health Insurance')
                  : (isSpanish ? 'Seguro de Vida' : 'Life Insurance')}
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0;">
                <strong style="color: #666;">${isSpanish ? 'Método de Contacto:' : 'Contact Method:'}</strong>
              </td>
              <td style="padding: 10px 0; text-align: right;">
                ${contactMethodDisplay}
              </td>
            </tr>
          </table>
        </div>

        <div style="background-color: #fff8f0; border-left: 4px solid #f18918; padding: 20px; margin-bottom: 25px;">
          <h3 style="color: #f18918; margin-top: 0; margin-bottom: 15px;">
            ${isSpanish ? '📋 Próximos Pasos' : '📋 Next Steps'}
          </h3>
          <ol style="margin: 0; padding-left: 20px; color: #666; line-height: 1.8;">
            <li>${isSpanish 
              ? 'Un especialista te contactará para confirmar tu cita' 
              : 'A specialist will contact you to confirm your appointment'}</li>
            <li>${isSpanish
              ? 'Prepara cualquier pregunta sobre tus necesidades de seguro'
              : 'Prepare any questions about your insurance needs'}</li>
            <li>${isSpanish
              ? 'Ten disponible información sobre tu cobertura actual (si aplica)'
              : 'Have your current coverage information ready (if applicable)'}</li>
          </ol>
        </div>

        ${message ? `
        <div style="background-color: #f0f4ff; border-radius: 10px; padding: 20px; margin-bottom: 25px;">
          <h3 style="color: #522784; margin-top: 0;">
            ${isSpanish ? 'Tu Mensaje' : 'Your Message'}
          </h3>
          <p style="color: #666; font-style: italic;">${message}</p>
        </div>
        ` : ''}

        <div style="text-align: center; padding: 25px; background-color: #522784; color: white; border-radius: 10px;">
          <h3 style="margin-top: 0; margin-bottom: 15px;">
            ${isSpanish ? '¿Necesitas ayuda?' : 'Need Help?'}
          </h3>
          <p style="margin: 10px 0;">
            ${isSpanish ? 'Teléfono' : 'Phone'}: <a href="tel:(786) 828-5576" style="color: #f18918; text-decoration: none;">(786) 828-5576</a>
          </p>
          <p style="margin: 10px 0;">
            ${isSpanish ? 'Correo' : 'Email'}: <a href="mailto:hello@unityfinancialnetwork.com" style="color: #f18918; text-decoration: none;">hello@unityfinancialnetwork.com</a>
          </p>
          <p style="margin: 10px 0; font-size: 14px; opacity: 0.9;">
            ${isSpanish ? 'Horario' : 'Hours'}: ${isSpanish ? 'Lunes-Viernes' : 'Monday-Friday'}, 9:00 AM - 6:00 PM EST
          </p>
        </div>

        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0;">
          <p style="color: #999; font-size: 12px; margin: 5px 0;">
            Unity Financial Network | 7950 NW 53rd St STE 136, Doral, FL 33166
          </p>
          <p style="color: #999; font-size: 12px; margin: 5px 0;">
            ${isSpanish 
              ? 'Este es un correo automático de confirmación. Por favor no responder a este mensaje.'
              : 'This is an automated confirmation email. Please do not reply to this message.'}
          </p>
        </div>
      </div>
    `

    // Email to department (internal)
    const departmentEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #522784;">${agent === 'alba-estevez' ? 'Nueva Cita con Alba Estévez' : 'New Appointment Scheduled'}</h2>
        ${agent === 'alba-estevez' ? `
        <div style="background-color: #e8f4fd; border-left: 4px solid #522784; padding: 15px; margin-bottom: 20px;">
          <p style="margin: 0; color: #522784; font-weight: bold;">📧 Esta cita está asignada específicamente a Alba Estévez</p>
          <p style="margin: 5px 0 0 0; color: #666; font-size: 14px;">Correo: alba.estevez@unityfinancialnetwork.com</p>
        </div>
        ` : ''}
        
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
          <h3 style="color: #333; margin-top: 0;">Client Information</h3>
          <table style="width: 100%;">
            <tr>
              <td style="padding: 8px 0;"><strong>Name:</strong></td>
              <td>${firstName} ${lastName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>Email:</strong></td>
              <td><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>Phone:</strong></td>
              <td><a href="tel:${phone}">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>Language:</strong></td>
              <td>${isSpanish ? 'Spanish' : 'English'}</td>
            </tr>
          </table>
        </div>

        <div style="background-color: #fff8f0; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
          <h3 style="color: #f18918; margin-top: 0;">Appointment Details</h3>
          <table style="width: 100%;">
            <tr>
              <td style="padding: 8px 0;"><strong>Date:</strong></td>
              <td>${formattedDate}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>Time:</strong></td>
              <td>${appointmentTime} EST</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>Type:</strong></td>
              <td>${appointmentType === 'health' ? 'Health Insurance' : 'Life Insurance'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>Preferred Contact:</strong></td>
              <td>${contactMethodDisplay}</td>
            </tr>
          </table>
        </div>

        ${message ? `
        <div style="background-color: #f0f4ff; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
          <h3 style="color: #522784; margin-top: 0;">Client Message</h3>
          <p style="color: #666;">${message}</p>
        </div>
        ` : ''}

        <div style="background-color: #522784; color: white; padding: 20px; border-radius: 10px; text-align: center;">
          <h3 style="margin-top: 0;">Action Required</h3>
          <p>Please contact the client within 24 hours to confirm the appointment.</p>
          <div style="margin-top: 15px;">
            <a href="tel:${phone}" style="display: inline-block; padding: 10px 20px; background-color: #f18918; color: white; text-decoration: none; border-radius: 5px; margin: 5px;">
              Call Client
            </a>
            <a href="mailto:${email}" style="display: inline-block; padding: 10px 20px; background-color: #f18918; color: white; text-decoration: none; border-radius: 5px; margin: 5px;">
              Email Client
            </a>
          </div>
        </div>

        <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e0e0e0; color: #999; font-size: 12px;">
          <p>Appointment scheduled via Unity Financial Network website</p>
          <p>Timestamp: ${new Date().toISOString()}</p>
        </div>
      </div>
    `

    // Send to HubSpot CRM
    const hubspotResult = await sendToHubSpot({
      firstName,
      lastName,
      email,
      phone,
      appointmentType,
      appointmentDate,
      appointmentTime,
      preferredContact,
      message,
      language,
      source: 'Website - Schedule Appointment Form'
    })

    if (!hubspotResult.success) {
      console.error('Failed to send lead to HubSpot:', hubspotResult.error)
      // Continue with email sending even if HubSpot fails
    }

    // Prepare email recipients based on agent
    let emailPromises = [
      // Email to customer
      resend.emails.send({
        from: emailConfig.from,
        to: email,
        subject: isSpanish 
          ? `✅ Cita Confirmada - Unity Financial Network`
          : `✅ Appointment Confirmed - Unity Financial Network`,
        html: customerEmailHtml
      })
    ]

    if (agent === 'alba-estevez') {
      // For Alba Estévez: Send to Alba and CC to IT
      emailPromises.push(
        resend.emails.send({
          from: emailConfig.from,
          to: 'alba.estevez@unityfinancialnetwork.com',
          cc: 'it@unityfinancialnetwork.com',
          subject: `Nueva Cita Programada con Alba Estévez - ${firstName} ${lastName}`,
          html: departmentEmailHtml
        })
      )
    } else {
      // Regular department emails
      emailPromises.push(
        // Email to specific department
        resend.emails.send({
          from: emailConfig.from,
          to: departmentEmail,
          cc: emailConfig.adminEmail, // CC to main admin
          subject: `New ${appointmentType === 'health' ? 'Health' : 'Life'} Insurance Appointment - ${firstName} ${lastName}`,
          html: departmentEmailHtml
        }),

        // Email to main admin
        resend.emails.send({
          from: emailConfig.from,
          to: emailConfig.adminEmail,
          subject: `New Appointment Scheduled - ${firstName} ${lastName}`,
          html: departmentEmailHtml
        })
      )
    }

    // Send all emails
    const emailResults = await Promise.all(emailPromises)

    return NextResponse.json({
      success: true,
      message: isSpanish 
        ? 'Cita agendada exitosamente'
        : 'Appointment scheduled successfully',
      hubspotLead: hubspotResult.success ? { 
        created: true, 
        contactId: hubspotResult.contactId 
      } : null
    })

  } catch (error) {
    console.error('Error scheduling appointment:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to schedule appointment'
      },
      { status: 500 }
    )
  }
}