//Faz a configuração do axios

import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.github.com',
});

//Create - cria uma configuração do axios pra gente

//Podemos definir uma base url para a API
//  baseURL - A partir do momento que defimos uma baseUrl para a API
//  'todas as requisições vão partir desse endereço'

export default api;