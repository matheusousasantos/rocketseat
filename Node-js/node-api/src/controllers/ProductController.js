//Importar o mongoose
const mongoose = require('mongoose');

//Importar o model
const Product = mongoose.model('Product');

//Exportando um objeto com algumas funções
module.exports = {
/* Faz uma listagem de todos os registros
 de produtos dentro da nossa base de dados */
 async index(req, res) {

//   Busca todos os registros do banco de dados
     const products = await Product.find();
     
//   Falo: Quero retornar em uma estrutura JSON   
     return res.json(products);

//   Obs: O JSON é muito parecedo com um objeto
//   dentro do java script
 }


}