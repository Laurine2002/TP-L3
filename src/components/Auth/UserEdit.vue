<template>
    <div class="UserEdit">
        <section class="vh-100" style="background-color: #508bfc;">
            <div class="container py-2 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div class="card shadow-2-strong" style="border-radius: 1rem;">
                    <div class="card-body p-5 text-center">

                        <h4 class="mb-5">Edit User</h4>

                        <ul class="alert alert-warning" v-if="Object.keys(this.errorList).length>0">
                            <li class="mb-0 ms-3" v-for="(error, index) in this.errorList" :key="index">
                                {{ error[0] }}
                            </li>
                        </ul>

                        <div class="form-outline mb-3">
                            
                        <input type="email" v-model="model.user.name" id="typeEmailX-2" class="form-control form-control-lg" />
                        <label class="form-label" name="name" for="typeEmailX-2"><i class="far fa-user"></i> Name</label>
                        </div>

                        <div class="form-outline mb-4">
                            
                        <input type="email" v-model="model.user.email" id="typeEmailX-2" class="form-control form-control-lg" />
                        <label class="form-label" name="email" for="typeEmailX-2"><i class="fas fa-at"></i> Email</label>
                        </div>

                        <div class="form-outline mb-4">
                            <i class="fas fa-lock"></i>
                        <input type="password" v-model="model.user.password" id="typePasswordX-2" class="form-control form-control-lg" />
                        <label class="form-label" name="password" for="typePasswordX-2"> Password</label>
                        </div>

                        <!-- <div class="form-outline mb-4">
                            <label for="formFile" class="form-label"></label>
                            <input class="form-control" name="photo" type="file" id="formFile">
                        </div> -->

                        <button class="btn btn-lg btn-block" @click="updateUser" style="background-color: #508bfc;" type="submit">Update</button><label></label>
                        <button type="reset" class="btn btn-lg col-auto" style="background-color: #dd4b39">Reset</button> 

                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
/* eslint-disable */
import { userEdit } from '@/services/user.service.js'

    export default{
        name:"userEdit",
        data() {
            return{
                userId: '',
                errorList:'',
                model:{
                    user:{
                        name:'',
                        email:'',
                        password:'',
                        photo:''
                    }
                }
            }
        },
        mounted(){

            // console.log(this.$route.params.id);

            this.userId = this.$route.params.id;
            this.getUserData(this.$route.params.id);
        },
        methods:{

        getUserData(){
            var mythis = this;
            axios.get('http://127.0.0.1:8000/api/admin/update-user/${this.userId}')
                .then(res =>{
                    alert(res.data.user);

                    this.model.user.name = res.data.user.name
                })
                .catch(function(error){
                    if (error.response) {

                        if (error.response.status == 404){
                            alert(mythis.errorList = error.response.data.errors);
                        }
                        }
                });
        },
        

        updateUser(){

                var mythis = this;
                axios.put('http://127.0.0.1:8000/api/admin/update-user/${userId}', this.model.user)
                .then(res =>{
                    console.log(res.data)
                    alert(res.data.message);

                    this.errorList='';
                })
                .catch(function(error){
                    if (error.response) {

                        if (error.response.status == 422){

                            mythis.errorList = error.response.data.errors;
                            this.$router.push('/accueilAdmin');
                        }

                        if (error.response.status == 404){

                            alert(error.response.data.message);

                        }

                        // console.log(error.response.data);
                        // console.log(error.response.status);
                        // console.log(error.response.headers);
                        
                        } else if (error.request) {
                        console.log(error.request);
                        } else {
                        console.log('Error', error.message);
                        }
                });
            }
        }
    }
</script>
