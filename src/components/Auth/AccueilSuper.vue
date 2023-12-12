<template>
    <div class="accueilSuper">
        <div class="wrapper">
          <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div class="container-fluid">
              <!-- <li class="nav-item">
                <router-link class ="nav-link navbar-brand" to ="/register"> Register</router-link>
              </li> -->
              <i class="fas fa-user-large-slash"></i>
            <router-link class ="nav-link navbar-brand" to ="/UserAbsences">Voir.Absences</router-link>

              <i class="far fa-clipboard"></i>
              <a class="navbar-brand float-end" href="#">Note Au Superviseur</a>
        
              <i class="far fa-circle-xmark"></i>
              <a class="navbar-brand text-danger float-end" href="#">Deconnexion</a>
              
              <form class="d-flex">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                  <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
          </nav>
        </div>
      <br><br>

      <table class="table table-striped table-hover container-fluid pr-5 p-2 ms-4 mt-5">
        <thead>
          <tr>
            <th scope="col">Matricule</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Created At</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody v-if="this.uSers.length>0">
          <tr v-for="(uSer, index) in this.uSers" :key="index">
            <th scope="row">{{ uSer.id }}</th>
            <td>{{ uSer.name }}</td>
            <td>{{ uSer.email }}</td>
            <td>
              <router-link :to ="{path:'/Super'+accueilSuper.id+'/edit'}" class ="btn btn-success">
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
</template>


<script>

  export default{
    name: 'accueilSuper',
    data(){
      return{
        supers:[]
      }
    },
    mounted(){
      console.log('Je suis la')
    }
  }

</script>

<!-- <script>
import axiosInstance from '../services/AxiosTokenInstance';
import { mapGetters, mapMutations } from 'vuex';
import {
    GET_USER_TOKEN_GETTER,
    LOADING_SPINNER_SHOW_MUTATION,
} from '../store/storeconstants';
export default {
    data() {
        return {
            accueilSupers: [],
        };
    },
    computed: {
        ...mapGetters('auth', {
            token: GET_USER_TOKEN_GETTER,
        }),
    },
    mounted() {
        this.showLoading(true);
        axiosInstance
            .get(`https://vue-completecourse.firebaseio.com/accueilSupers.json`)
            .then((response) => {
                this.formatAccueilSupers(response.data);
                this.showLoading(false);
            })
            .catch(() => {
                this.showLoading(false);
            });
    },
    methods: {
        ...mapMutations({
            showLoading: LOADING_SPINNER_SHOW_MUTATION,
        }),
        formatAccueilSupers(accueilSupers) {
            for (let key in accueilSupers) {
                this.accueilSupers.push({ ...accueilSupers[key], id: key });
            }
            console.log(this.accueilSupers);
        },
    },
};
</script> -->

<style scoped></style>