const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {

    async index(req, res) {

        const products = await Product.find();
        return res.json(products);

    },

    async show(req, res){

//      Busca de usuário por 'ID'
//      Posso usar novamente o 'req'
        const product = await Product.findById(req.params.id);
        return res.json(product);
    },

    async store(req, res) {

        const product = await Product.create(req.body);
        return res.json(product);
    },

    async update(req, res) {

//      findByIdAndUpdate:
//      Vou encontrar um produto e atualizar
        const product = await Product.
        findByIdAndUpdate(req.params.id, req.body, { new: true });
//      Vai pegar(req.params.id) e atualizar(req.body)
//      Como ser tiverssemos  unindo o 'show' e o 'store' 

//      { new: true } - Moogose retorne o objeto atualizando para a variável product
        
        return res.json(product);

    },

    async destroy(req, res) {
        await Product.findByIdAndRemove(req.params.id);

//      Retorna uma reposta de sucesso sem nenhum conteúdo
        return res.send();
    }
}