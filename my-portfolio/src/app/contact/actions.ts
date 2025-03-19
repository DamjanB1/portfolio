'use server';

import { Resend } from 'resend';

interface FormData {
  name: string;
  email: string;
  projectDetails: string;
}

export async function sendEmail(formData: FormData) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { data, error } = await resend.emails.send({
      from: 'on@resend.dev', // Use this for testing; replace with your domain later
      to: 'damjan.bartol1@gmail.com',
      replyTo: formData.email,
      subject: `New Contact Form Submission from ${formData.name}`,
      text: `Name: ${formData.name}\nEmail: ${formData.email}\nProject Details: ${formData.projectDetails}`,
      html: `<h2>New Contact Form Submission</h2><p><strong>Name:</strong> ${formData.name}</p><p><strong>Email:</strong> ${formData.email}</p><p><strong>Project Details:</strong> ${formData.projectDetails}</p>`,
    });

    if (error) throw new Error(error.message);
    console.log('Email sent:', data);
    return { success: true };
  } catch (error: any) {
    console.error('Error sending email:', error.message);
    return { success: false, error: `Failed to send email: ${error.message}` };
  }
}