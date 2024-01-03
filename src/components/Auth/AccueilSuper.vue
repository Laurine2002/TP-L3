<template>
    <div class="accueilSuper">
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div class="container-fluid">
            <div class="container-fluid">
              <!-- <li class="nav-item">
                <router-link class ="nav-link navbar-brand" to ="/register"> Register</router-link>
              </li> -->
              
            <router-link class ="nav-link navbar-brand" to ="/UserAbsences"><i class="fas fa-user-large-slash"></i> Voir.Absences</router-link>

              
            <router-link class ="nav-link navbar-brand" to ="/#"><i class="far fa-clipboard"></i>Note Au Superviseur</router-link>
        
             
            </div>

          <form class="d-flex">
              
              <button class ="btn btn-danger me-2" @click="logout">Deconnexion</button>
          </form>

          <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </nav><br><br>

      <div class="card-body">
        <table class="table table-striped table-hover container-fluid pr-5 p-2 ms-4 mt-5">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Matricule</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody v-if="this.uSers.length>0">
          <tr v-for="(uSer, index) in this.uSers" :key="index">
            <th scope="row">{{ uSer.id }}</th>
            <td>{{ uSer.name }}</td>
            <td>{{ uSer.matricule }}</td>
            <td>{{ uSer.email }}</td>
            <td>
              <router-link :to ="{path:'/Super'+accueilSuper.id+'/voir'}" class ="btn btn-success">
                  Voir Plus
                </router-link>
            </td>
            
          </tr>
        </tbody>
        <tbody v-else>
          <tr>
            <td colspan="7">Loading...</td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
</template>

<script>

  import axios from 'axios'

  export default{
    name: 'uSers',
    data(){
      return{
        uSers:[]
      }
    },
    mounted(){

      this.getUSers();
      // console.log('Je suis la')
    },
    methods:{
      getUSers(){
        axios.get('http://127.0.0.1:8000/api/admin/create-user').then(res =>{
          this.uSers = res.data.uSers
          // console.log(this.accueilSupers  ) 
        })
        .catch(function(error){
              console.log('je suis lerreur',error)
            
            });
      },
      async logout() {
      try {
        // Envoyer une requête de déconnexion à votre API
        await axios.post('http://localhost:8000/logout');

        // Effectuer d'autres opérations après la déconnexion si nécessaire

        // Rediriger l'utilisateur vers la page de connexion ou une autre page
        this.$router.push('/accueil');
      } catch (error) {
        console.error('Erreur lors de la déconnexion :', error);
      }
    },
    },
  }

</script>

<style>
  .card-header{
    
    margin-bottom: -1px;
    margin-top: 25px;
  }
</style>
