import axios from 'axios'

const base_url = "http://127.0.0.1:8000/api/admin/"

export function saveUser(user){
    return axios.post(`${base_url}create-user`, user);
}

export function userEdit(user){
    return axios.post(`${base_url}create-user`, user);
}

