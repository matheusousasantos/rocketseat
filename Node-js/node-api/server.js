const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express(); 

mongoose.connect('mongodb+srv://matheusousasantos:ribossomos2019@cluster0-hpnpm.mongodb.net/omnistack8?retryWrites=true&w=majority',
{useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

//Registra um model na aplicaçãp
requireDir('./src/models');

//Teste

//Tenho a instenção de um Product
const Product = mongoose.model('Product');

app.get('/', (rep, res) => {
    
//  Criação de um produto
    Product.create({ 

        title: 'React Native', 
        description: 'Build native apps with React',
        url: 'http://github.com/facebook/react-native',

    });

    return res.send(Product.title);
});

app.listen(3001);