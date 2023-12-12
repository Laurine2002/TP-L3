<template>
    <div class="super/userCreate">
        
        <!-- <form @submit.prevent="ajouterUtilisateur" method=""> -->
        <form>
            <section class="vh-100" style="background-color: #508bfc;">
                <div class="container py-2 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div class="card shadow-2-strong" style="border-radius: 1rem;">
                        <div class="card-body p-5 text-center">

                            <h4 class="mb-5">Add User</h4>

                            <ul class="alert alert-warning" v-if="Object.keys(this.errorList).length>0">
                                <li class="mb-0 ms-3" v-for="(error, index) in this.errorList" :key="index">
                                    {{ error[0] }}
                                </li>
                            </ul>

                            <div class="form-outline mb-3">
                            
                            <input type="text" v-model="model.user.name" id="typeTextX-2" class="form-control form-control-lg" />
                            <label class="form-label" name="name" for="typeTextX-2"> <i class="far fa-user"></i> Name</label>
                            </div>

                            <div class="form-outline mb-4">
                                
                            <input type="email" v-model="model.user.email" id="typeEmailX-2" class="form-control form-control-lg" />
                            <label class="form-label" name="email" for="typeEmailX-2"><i class="fas fa-at"></i> Email</label>
                            </div>

                            
                            <div class="form-outline mb-4">     
                                            
                            <input type="password" v-model="model.user.password" id="typePasswordX-2" class="form-control form-control-lg" />
                            
                            <label class="form-label" name="password" for="typePasswordX-2"><i class="fas fa-lock"></i> Password</label>
                            
                            </div>

                            <div class="form-outline mb-4">

                                <!-- <label for="photo">Photo:</label> -->
                                <input type="file" @change="handleFileChange" accept="image/*" required>
                             </div>  
                        <button class="btn btn-lg btn-block" @click="saveUser" style="background-color: #77a0f8" type="submit">Create</button><label></label>

                             
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </form>
        
    </div>
</template>

<script>

    // import axios from 'axios'

    export default{
        name:"userCreate",
        data() {
            return{
                
                photoFile: null,
                photoUrl: null,
                errorList:'',
                model:{
                    user:{
                        name:'',
                        email:'',
                        password:'',
                        photo:null
                    }
                }
            }
        },
        methods:{
                 
            handleFileUpload(event) {
                this.photoFile = event.target.files[0];
            },
            saveUser(){

                // var mythis = this;
                // axios.post('http://127.0.0.1:8000/admin/create-user', this.model.user)
                // .then(res =>{
                //     console.log(res.data)
                //     alert(res.data.message);

                //     this.model.user ={
                //         name:'',
                //         email:'',
                //         password:'',
                //         photo:''
                //     }
                // })
                // .catch(function(error){
                //     if (error.response) {

                //         if (error.response.status == 422){
                //             mythis.errorList = error.response.data.errors;
                //             this.$router.push('/accueilAdmin');
                            
                //         }

                //         // console.log(error.response.data);
                //         // console.log(error.response.status);
                //         // console.log(error.response.headers);
                        
                //         } else if (error.request) {
                //         console.log(error.request);
                //         } else {
                //         console.log('Error', error.message);
                //         }
                // });
            },
            // uploadPhoto() {
            //     const formData = new FormData();
            //     formData.append('photo', this.photoFile);

            //     axios.post('http://127.0.0.1:8000/admin/create-user', formData)
            //         .then(response => {
            //         this.photoUrl = response.data.url; // Assurez-vous que votre API renvoie l'URL de la photo
            //     })
            //     .catch(error => {
            //         console.error('Erreur lors du téléchargement de la photo :', error);
            //     });
            // },
        }
    }
</script>



<!-- <script>

    import axios from 'axios'

    export default{
        name:"userCreate",
        data() {
            return{
                model:{
                    user:{
                        name:'',
                        email:'',
                        password:'',
                        photo:null,
                    }
                }
            }
        },
        methods:{     
            handleFileUpload(event) {
                this.photoFile = event.target.files[0];
            },
            saveUser(){

                let formData = new FormData();
                formData.append('name', this.user.name);
                formData.append('email', this.user.email);
                formData.append('password', this.user.password);
                formData.append('photo', this.user.photo);
                axios.post('http://127.0.0.1:8000/admin/create-user', formData)
                .then(res =>{
                    console.log(res.data)
                    alert(res.data.message);
                })
                .catch(function(error){
                    if (error.response) {

                        if (error.response.status == 422){
                            // mythis.errorList = error.response.data.errors;
                            this.$router.push('/accueilAdmin');
                            
                        }
                        } else if (error.request) {
                        console.log(error.request);
                        } else {
                        console.log('Error', error.message);
                        }
                });
            },

            uploadPhoto() {
                const formData = new FormData();
                formData.append('photo', this.photoFile);

                axios.post('http://127.0.0.1:8000/admin/create-user', formData)
                    .then(response => {
                    this.photoUrl = response.data.url; // Assurez-vous que votre API renvoie l'URL de la photo
                })
                .catch(error => {
                    console.error('Erreur lors du téléchargement de la photo :', error);
                });
            },
        }
    }
</script> -->



