import React, { Component } from 'react';
import api from '../../services/api';

import './style.css';

export default class Product extends Component {
    
    state = {
        product: {}
    };

    async componentDidMount() {

//      Acessa os parâmetros que estão na rota:
//      this.props.match.params        


        const { id } = this.props.match.params;

        const response = await api.get(`/products/${ id }`);
        
        this.setState( { product: response.data } );
    
    }
    
    render() {

    //  Pegando a variável do estado
        const { product } = this.state;

        return (
            <div className="product-info">
                <h1>{ product.title }</h1>
                <p>{ product.description }</p>

                <p>
                    URL: <a target="_blank" href={ product.url }>{ product.url }</a>
                </p>
            </div>
        );
    }
}