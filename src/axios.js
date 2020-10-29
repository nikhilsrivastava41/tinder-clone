import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tinder-backend-nikhil.herokuapp.com'
})

export default instance;