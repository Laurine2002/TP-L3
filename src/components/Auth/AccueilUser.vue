<template>
    <div class="accueilUser">
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div class="container-fluid">
          <li class="nav-item">
            <router-link class ="nav-link navbar-brand" to ="/MessageAdmin">Message.A.L'Admin</router-link>
          </li>
    
          <a class="navbar-brand btn btn-danger" href="#">Deconnexion</a>
          
          <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
      </nav> <br><br>

      <div class="container-fluid mt-5">
        <h2 class="text-center">VOICI LA LISTE DE VOS ABSENCES</h2>
                <!-- <li v-for="absence in absences" :key="absence.id">
                    {{ absence.date }} - {{ absence.motif }}
                </li> -->
            <div class="card text-center">
              <div class="card-header">
                Absence du:
              </div>
              <div class="card-body">
                <h5 class="card-title">STATUT: </h5>
                <p class="card-text">MOTIF: With supporting text below as a natural lead-in to additional content.</p>
              </div>
            </div>
      </div>
    </div>
</template>

<script>

import axios from 'axios'

export default{
    // name: 'absences',
    data(){
      return{
        absences: [] // Initialiser la liste des absences
      }
    },
    mounted() {
        // Appeler la méthode pour récupérer les absences au chargement de la page
        this.getAbsences();
    },
    methods: {
        getAbsences() {
            // Utiliser Axios pour effectuer une requête GET
            axios.get('http://127.0.0.1:8000/api/user/view-absences') // Remplacez '/api/absences' par l'URL réelle de votre API
                .then(response => {
                    // Mettre à jour la liste des absences avec les données reçues
                    this.absences = response.data;
                })
                .catch(error => {
                    console.error('Erreur lors de la récupération des absences', error);
                });
        }
    },
  }

  // new Vue({
  //   el: '#app',
  //   data: {
  //       absences: [] // Initialiser la liste des absences
  //   },
  //   mounted() {
  //       // Appeler la méthode pour récupérer les absences au chargement de la page
  //       this.getAbsences();
  //   },
  //   methods: {
  //       getAbsences() {
  //           // Utiliser Axios pour effectuer une requête GET
  //           axios.get('/api/absences') // Remplacez '/api/absences' par l'URL réelle de votre API
  //               .then(response => {
  //                   // Mettre à jour la liste des absences avec les données reçues
  //                   this.absences = response.data;
  //               })
  //               .catch(error => {
  //                   console.error('Erreur lors de la récupération des absences', error);
  //               });
  //       }
  //   },

</script>

