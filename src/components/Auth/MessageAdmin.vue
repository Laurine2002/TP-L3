<template>
    <div>

        <!-- Section: Design Block -->
        <section class="text-center">
        <!-- Background image -->
        <div class="p-5 bg-image" style="
                background-image: url('https://mdbootstrap.com/img/new/textures/full/171.jpg');
                height: 300px;
                "></div>
        <!-- Background image -->

        <div class="card mx-4 mx-md-5 shadow-5-strong" style="
                margin-top: -100px;
                background: hsla(0, 0%, 100%, 0.8);
                backdrop-filter: blur(30px);
                ">
            <div class="card-body py-5 px-md-5">

            <div class="row d-flex justify-content-center">
                <div class="col-lg-8">
                <h2 class="fw-bold mb-5">Veuillez ecrire votre message de justification</h2>
                <form  @submit.prevent="sendEmail">
                    <!-- 2 column grid layout with text inputs for the first and last names -->
                    <div class="row">
                    <div class="col-md-6 mb-4">
                        <div class="form-outline">
                        <input type="text" v-model="toEmail" required id="form3Example1" class="form-control" />
                        <label class="form-label" for="form3Example1">Destinataire:</label>
                        </div>
                    </div>
                    <div class="col-md-6 mb-4">
                        <div class="form-outline">
                        <input type="text" v-model="subject" required id="form3Example2" class="form-control" />
                        <label class="form-label" for="form3Example2">Sujet:</label>
                        </div>
                    </div>
                    </div>

                    <!-- Email input -->
                    <div class="form-outline mb-4">
                    <textarea type="email" v-model="message" required id="form3Example3" class="form-control" />
                    <label class="form-label" for="form3Example3">Message:</label>
                    </div>

                    <!-- Submit button -->
                    <button type="submit" class="btn btn-primary btn-block mb-4">
                    Sign up
                    </button>
                </form>
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
    //     axios.post('http://localhost:8000/user/send-message-to-admin', {
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
