<template>
    <div class="accueilAdmin">
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div class="container-fluid">
            <li class="nav-item">
              
              <router-link class ="nav-link navbar-brand float-end" to ="/user/register"><i class="fas fa-circle-plus"></i> Add Superviseur</router-link>
            </li>
            <li class="nav-item">
              
              <router-link class ="nav-link navbar-brand float-end" to ="/super/notif"><i class="far fa-bell"></i> Notifier.Superviseur</router-link>
            </li>

            
            <button class ="text-danger float-end" @click="logout">Deconnexion</button>
            
            <div class="input-group">
            <div class="form-outline" data-mdb-input-init>
              <input type="search" id="form1" class="form-control" />
              <label class="form-label" for="form1">Search</label>
            </div>
            <button type="button" class="btn btn-primary" data-mdb-ripple-init>
              <i class="fas fa-search"></i>
            </button>
          </div>

          <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </nav><br><br>
        
          <div class="card">
            <div class="card-header">
              <h5>
                <router-link class ="btn float-end" to ="/user/Create" style="background-color: #77a0f8">
                  Add User
                </router-link>
              </h5>
            </div>
          </div>

      <div class="card-body">
        <table class="table table-striped table-hover container-fluid pr-5 p-2 ms-4 mt-5">
        <thead>
          <tr>
            <th scope="col">Matricule</th>
            <th scope="col">Name</th>
            <th scope="col">Role</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody v-if="this.uSers.length>0">
          <tr v-for="(uSer, index) in this.uSers" :key="index">
            <th scope="row">{{ uSer.id }}</th>
            <td>{{ uSer.name }}</td>
            <td>{{ uSer.role }}</td>
            <td>{{ uSer.email }}</td>
            <td>
              <router-link :to ="{path:'/Super'+accueilSuper.id+'/edit'}" class ="btn btn-success">
                  Edit
                </router-link>
                <button type="button" @click="deleteUser(user.id)" class="btn btn-danger">Delete</button>
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
      // getUSers(){
      //   axios.get('http://127.0.0.1:8000/api/admin/create-user').then(res =>{
      //     this.uSers = res.data.uSers
      //     // console.log(this.accueilSupers  ) 
      //   })
      //   .catch(function(error){
      //         console.log('je suis lerreur',error)
            
      //       });
      // },
      deleteUser(){
        var mythis = this;
        // console.log(userId)
        if(confirm('Etes-vous sur de Vouloir Supprimer?')){
          // console.log(this.accueilSupers)
          axios.delete('http://127.0.0.1:8000/api/admin/delete-user/${userId}')
          .then(res =>{

            alert(res.data.message);
            this.getUsers();

          })
          .catch(function(error){
            if (error.response) {

              if (error.response.status == 404){
                alert(mythis.errorList = error.response.data.errors);
              }
            }
            });
        }

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
