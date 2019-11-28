const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
//  Quais os campos que eu quero salvar no banco de dados
    
    title:{            //Atributo
        type: String,    //Tipo
        required: true,  //Obrigatório
    },

    description: {
        type: String,
        required: true,
    },

    url: {
       type: String,
        required: true,
    },

//  Irá salvar uma data quando o registro for salvo no banco de dados.
    createdAt: {
        type: Date, 
        default: Date.now,
    }

});

//Registra um model na nossa aplicação
mongoose.model('Product', ProductSchema);