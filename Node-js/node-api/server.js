const express = require('express');
const mongoose = require('mongoose');

//Inciando o app
const app = express(); 

//Iniciando o Banco de dados
mongoose.connect('mongodb+srv://matheusousasantos:ribossomos2019@cluster0-hpnpm.mongodb.net/omnistack8?retryWrites=true&w=majority',
{useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

//Primeira rota
app.get('/', (rep, res) => {
    res.send('Olá, Mundo!');
});

app.listen(3001);