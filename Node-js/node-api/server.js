const express = require('express');
const cros = require('cros');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express(); 
app.use(express.json());
app.use(cros);

mongoose.connect('mongodb+srv://matheusousasantos:ribossomos2019@cluster0-hpnpm.mongodb.net/omnistack8?retryWrites=true&w=majority',
{useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

requireDir('./src/models');

app.use('/api', require('./src/routes'));

app.listen(3001);