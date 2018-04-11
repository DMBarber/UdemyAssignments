import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerbuilder-5308d.firebaseio.com/'
});

export default instance;