import axios from 'axios';

const api = axios.create({
    // baseURL: 'https://backendproyectofinalrc-production.up.railway.app',
    baseURL: 'http://localhost:4003',
})

api.interceptors.request.use((config) => {
    config.headers = {
        'x-token': localStorage.getItem('token'),
    };
    return config;
})

export default api;