const express = require('express') 

const app = express(); 

//Toda vez que o usuário acessar a rota...
app.get('/', (rep, res) => {
    res.send('Hello Word!');
});

//Função que recebe dois parâmetros

/*rep - Requisição que estamos fazendo ao servidor contém todos os 'detalhes 
        possíveis dessa requisição'.

  res - Resposta que iremos dar para a requisição.
*/

app.listen(3001);