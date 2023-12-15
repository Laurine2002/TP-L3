<template>
  <div class="UserAbsences">
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div class="container-fluid">
          <li class="nav-item">
            
            <router-link class ="nav-link navbar-brand float-end" to ="/user/register"><i class="fas fa-circle-plus"></i> Add Superviseur</router-link>
          </li>
          <li class="nav-item">
            
            <router-link class ="nav-link navbar-brand float-end" to ="/super/notif"><i class="far fa-bell"></i> Notifier.Superviseur</router-link>
          </li>

          
          <button class ="text-danger float-end" @click="logout">Deconnexion</button>
          
          <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </nav><br><br>
        

    <div v-for="absence in absences" :key="absence.id">
    <h2>LISTE DES ABSENCES</h2>
        <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
            <div class="card-header">Une nouvelle absence</div>
                <div class="card-body">
                    <button>Envoyer Un Message Pour Justifier Votre Absence</button>
                    <p class="card-text">{{ absence.date }}</p>
                </div>
            </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      absences: [],
    };
  },
  mounted() {
    // Remplacez l'URL par l'endpoint correct pour récupérer les absences de l'utilisateur
    axios.get('http://127.0.0.1:8000/api/user/view-absences')
      .then(response => {
        this.absences = response.data;
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des absences', error);
      });
  },
};
</script>
