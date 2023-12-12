

    const express = require('express');
    const bodyParser = require('body-parser');
    const nodemailer = require('nodemailer');

    const app = express();
    const port = 3000;

    app.use(bodyParser.json());

    app.post('/api/send-email', (req, res) => {
    const { to, subject, message } = req.body;

    // Configurer le transporter pour l'envoi d'e-mails (utilisez vos propres informations)
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
        user: 'admin@gmail.com',
        pass: 'admin'
        }
    });

    // Configurer le contenu de l'e-mail
    const mailOptions = {
        from: 'admin@gmail.com',
        to: to,
        subject: subject,
        text: message
    };

    // Envoyer l'e-mail
    transporter.sendMail(mailOptions, (error) => {
        if (error) {
        return res.status(500).send(error.toString());
        }
        res.status(200).send('E-mail envoyé avec succès');
    });
    });

    app.listen(port, () => {
    console.log(`Serveur écoutant sur le port ${port}`);
    });
