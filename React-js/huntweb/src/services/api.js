import axios from 'axios';

//URL base de acesso a API
const api = axios.create({ 
    baseURL: 'https://rocketseat-node.herokuapp.com/api',
});

export default api;