import axios from 'axios';

const api = axios.create({
    baseURL: 'http://challenge-front-end.bovcontrol.com/v1/'
})

export default api;