import { Resend } from 'resend';

export const resend = new Resend(process.env.RESEND_API_KEY);

export const emailConfig = {
  from: 'Unity Financial <noreply@unityfinancialnetwork.com>',
  replyTo: 'info@unityfinancialnetwork.com',
  adminEmail: 'info@unityfinancialnetwork.com'
};