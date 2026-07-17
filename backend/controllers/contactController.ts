import { Request, Response } from 'express';
import { sendMail } from '../utils/mailer';

export const submitContactForm = async (req: Request, res: Response): Promise<void> => {
  const { name, email, company, interests, message } = req.body;

  if (!name || !email || !company || !message) {
    res.status(400).json({ error: 'Please provide all required fields' });
    return;
  }

  const interestList: string[] = Array.isArray(interests) ? interests : [];

  try {
    await sendMail({
      to: process.env.CONTACT_TO_EMAIL,
      from: process.env.SMTP_USER,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company}`,
        `Area of Interest: ${interestList.length ? interestList.join(', ') : 'None specified'}`,
        '',
        'Message:',
        message,
      ].join('\n'),
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Area of Interest:</strong> ${interestList.length ? interestList.join(', ') : 'None specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    res.status(201).json({ message: 'Message sent successfully. We will get back to you within 24 hours.' });
  } catch (err) {
    console.error('Error sending contact form email:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
