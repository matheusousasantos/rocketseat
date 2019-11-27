const express = require('express') 

const app = express(); 

app.get('/', (rep, res) => {
    res.send('Olá, Mundo!');
});

app.listen(3001);