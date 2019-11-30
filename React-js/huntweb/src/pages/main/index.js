import React, { Component } from 'react';

import api from '../../services/api';

export default class Main extends Component {
//  O estado é sempre um objeto
    state = {
//      Aqui podemos armazenar as variáveis que
//      quizermos

        products: [] 

    }

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get(`/products`);
        
//      Armazeando os produtos
//      Será as informações que eu quero atualizar
        this.setState({ 
            products: response.data.docs 
        });
    
    }

    render() {

        return (

//          Mostrando o produto em tela
            <div className="product-list">

                { this.state.products.map(product => (
                    <h2 key={product._id}>{ product.title }</h2>
                ))}
            </div>
        );

    }
}