const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController')

routes.get('/products', ProductController.index);
routes.post('/products', ProductController.store);

//Rota que busca um usuário por 'id'
//Esse id(parametro) podemos buscar usando o ':' e o nome do parametro 'id'
routes.get('/products/:id', ProductController.show);

// put - método de atualização
routes.put('/products/:id', ProductController.update);

routes.delete('/products/:id', ProductController.destroy);



module.exports = routes;