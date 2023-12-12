import { createApp } from 'vue'
import App from './App.vue';
import router from './router';




// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)



const app=createApp(App);
app.use(router);
app.mount('#app');


// import './assets/main.css'

// createApp(App).mount('#app')
