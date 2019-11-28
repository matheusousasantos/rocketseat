const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express(); 

/*Permitir que eu envie dados para a minha aplicação no
formato de JSON*/
app.use(express.json());

mongoose.connect('mongodb+srv://matheusousasantos:ribossomos2019@cluster0-hpnpm.mongodb.net/omnistack8?retryWrites=true&w=majority',
{useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

requireDir('./src/models');

app.use('/api', require('./src/routes'));

app.listen(3001);