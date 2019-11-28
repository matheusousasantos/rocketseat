const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {

    async index(req, res) {

        const products = await Product.find();
        return res.json(products);

    },

    async store(req, res) {

//      Cria um novo com os dados dentro do 'req'
        const product = await Product.create(req.body);

//      req.body:
//      O corpo da requisição - contém todos os dados

        return res.json(product);
    }


}