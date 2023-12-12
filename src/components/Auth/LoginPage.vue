<template>
    <div class="login">
        <!-- <h1>Bienvenu Sur PRESENCE LINE</h1> -->

        <!-- <nav>
            <router-link to="/register">Creer un compte</router-link>
        </nav> -->
    <form @submit.prevent =" handleSubmit" method="POST">
    
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

                        <div class="d-flex align-items-center mb-3 pb-1">
                            <i class="fas fa-cubes fa-2x me-3" style="color: #ff6219;"></i>
                            <span class="h1 fw-bold mb-0">Logo</span>
                        </div>

                        <h5 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Connectez-vous a votre compte</h5>

                        <div class="form-outline mb-4">
                          
                          <input type="email" id="form2Example17" v-model="email" required class="form-control form-control-lg" />
                            <label class="form-label" name="email" for="form2Example17"><i class="fas fa-at"></i> Email address</label>
                        </div>

                        <div class="form-outline mb-4">
                          
                            <input type="password" id="form2Example27" v-model="password" required class="form-control form-control-lg" />
                            <label class="form-label" name="password" for="form2Example27"><i class="fas fa-lock mb-5"></i> Password</label>
                        </div>

                        <div class="pt-1 mb-4">
                            <button class="btn btn-dark btn-lg btn-block" @click="handleSubmit" type="button">Login</button>
                        </div>

                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
      </section>

    </form>
      

    </div>
</template>

<!-- <script>
import axios from 'axios'
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      login() {
        // Utilisez Axios pour effectuer une demande de connexion
        axios.post('https://localhost:8080/login', {
          email: this.email,
          password: this.password,
        })
        .then(response => {
          // Gérez la réponse du serveur après une connexion réussie
          console.log(response.data);
          alert(response.data.message);
        })
        .catch(error => {
          // Gérez les erreurs, par exemple afficher un message d'erreur à l'utilisateur
          console.error('Erreur de connexion:', error);
        });
      },
    },
  };
  </script> -->

<script>
  // import axios from 'axios'
  export default{
    data(){
      return {
        email: '',
        password: '',
      };
    },
    methods:{
      // async handleSubmit(){
      //   await axios.post('http://127.0.0.1:8000/login',{
      //     email: this.email,
      //     password: this.password,
      //   })
      //   .then(response => {
      //     // Gérez la réponse du serveur après une connexion réussie
      //     console.log(response.data);
      //     alert(response.data.message);
      //   })
      //   .catch(error => {
      //     // Gérez les erreurs, par exemple afficher un message d'erreur à l'utilisateur
      //     console.error('Erreur de connexion:', error);
      //   });
      // },
    }
  }

</script>
  