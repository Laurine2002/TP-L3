<template>
    <div class="accueilUser">
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
        <div class="container-fluid">
          <li class="nav-item">
            
            <router-link class ="nav-link navbar-brand" to ="/#">Voir.Absences</router-link>
          </li>
          <li class="nav-item">
            <router-link class ="nav-link navbar-brand" to ="/MessageAdmin">Message.A.L'Admin</router-link>
          </li>
    
          <a class="navbar-brand text-danger" href="#">Deconnexion</a>
          
          <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
      </nav> <br><br>

      <table class="table table-striped table-hover container-fluid pr-5 p-2 ms-4 mt-5">
        <thead>
          <tr>
            <th scope="col">Matricule</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
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
        });
      }
    },
  }

</script>

