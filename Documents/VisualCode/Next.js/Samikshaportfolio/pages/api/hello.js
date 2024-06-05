// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }


import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    // Create a transporter
    let transporter = nodemailer.createTransport({
      service: 'gmail', // you can use other email service providers
      auth: {
        user: process.env.EMAIL_USER, // your email
        pass: process.env.EMAIL_PASS, // your email password
      },
    });

    try {
      // Send mail
      await transporter.sendMail({
        from: email,
        to: process.env.EMAIL_USER, // your email
        subject: `${subject}`,
        html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong> ${message}</p>`,
      });

      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Something went wrong.' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method not allowed.' });
  }
}
