<template>
    <div>

        <section class="vh-100" style="background-color: #9A616D;">
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col col-xl-10">
                <div class="card" style="border-radius: 1rem;">
                <div class="row g-0">
                    <div class="col-md-6 col-lg-5 d-none d-md-block">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                        alt="login form" class="img-fluid" style="border-radius: 1rem 0 0 1rem;" />
                    </div>
                    <div class="col-md-6 col-lg-7 d-flex align-items-center">
                    <div class="card-body p-4 p-lg-5 text-black">

                        <form @submit.prevent="sendEmail">

                            <h5 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Veuillez ecrire la note a envoyer au superviseur</h5>

                          
                            <input type="email" id="to" v-model="toEmail" required class="form-control form-control-lg" />
                            <label class="form-label" name="email" for="to"><i class="fas fa-at"></i>Destinataire:</label>

                          
                          <input type="text" id="subject" v-model="subject" required class="form-control form-control-lg" />
                            <label class="form-label" name="email" for="subject"><i class="fas fa-at"></i>Sujet:</label>

                            <div class="form-outline mb-4">
                          
                                <textarea id="message" v-model="message" required class="form-control form-control-lg"/>
                                    <label class="form-label" name="email" for="message"><i class="fas fa-at"></i>Message:</label>
                            </div>
                            
                            <button type="submit">Envoyer</button>
                        </form>
                     
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
      </section>


      
    </div>
  </template>
  
  <script>
//   import axios from 'axios'
  export default {
    data() {
      return {
        toEmail: '',
        subject: '',
        message: ''
      };
    },
    methods: {
    //   sendEmail() {
    //     // Utilisez Axios pour envoyer les données au serveur
    //     axios.post('http://127.0.0.1:8000/admin/send-notification-to-superviseur', {
    //       to: this.toEmail,
    //       subject: this.subject,
    //       message: this.message
    //     })
    //     .then(response => {
    //       console.log('E-mail envoyé avec succès', response);
    //       // Ajoutez la logique supplémentaire en fonction de votre application
    //     })
    //     .catch(error => {
    //       console.error('Erreur lors de l\'envoi de l\'e-mail', error);
    //       // Gérez les erreurs ici
    //     });
    //   }
    }
  };
  </script>

<script>
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
        user: 'votre-email@gmail.com',
        pass: 'votre-mot-de-passe'
        }
    });

    // Configurer le contenu de l'e-mail
    const mailOptions = {
        from: 'votre-email@gmail.com',
        to: to,
        subject: subject,
        text: message
    };

    // Envoyer l'e-mail
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
        return res.status(500).send(error.toString());
        }
        res.status(200).send('E-mail envoyé avec succès');
    });
    });

    app.listen(port, () => {
    console.log(`Serveur écoutant sur le port ${port}`);
    });

</script>
