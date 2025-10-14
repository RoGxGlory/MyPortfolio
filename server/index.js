// server/index.js

import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';
import 'dotenv/config'; // To use .env variables locally

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

// Middleware
app.use(express.json());
app.use(cors()); // This allows requests from your React app

// The API endpoint
app.post('/api/send-email', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        const { data, error } = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: ['benabdeljalilrayane1@gmail.com'],
            subject: `New Message from ${name}`,
            reply_to: email,
            html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
        });

        if (error) {
            return res.status(400).json(error);
        }

        res.status(200).json({ message: 'Email sent successfully!', data });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});