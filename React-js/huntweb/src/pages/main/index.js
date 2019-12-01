import React, { Component } from 'react';

import api from '../../services/api';

import './style.css';

export default class Main extends Component {

    state = {
        products: [],
        productInfo: {},

//      Página que inicia a nossa aplicação
        page: 1,
    }

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async ( page = 1 ) => {
        const response = await api.get(`/products?page=${page}`);

        const { docs, ... productInfo } = response.data;
        
        this.setState({ 
            products: docs, productInfo, page
        });
    
    }

    prevPage = () => {
        const { page, productInfo } = this.state;

//      Não tenho nenhuma página abaixo de 1 então eu retorno
        if(page === 1) return;

        const pageNumber = page - 1; //Pego a página anterior

//      Vou passar a página a ser acessada na URL
        this.loadProducts( pageNumber );

    }

    nextPage = () => {

//  Busca qual a página atual que estou e o productInfo do estado
    const { page, productInfo } = this.state;

//  Se a página que estamos atualmente já é a ultima página
//  productInfo.pages - retorna o número total de páginas
//  Se já tivermos na ultima página não faça nada só retorna
    if( page === productInfo.pages ) return;

//  Se não...
    const pageNumber = page + 1; //Vou pegar a próxima página
    
//  Vou passar a página a ser acessada na URL
    this.loadProducts( pageNumber );

    }

    render() {
//      Vai buscar a variável products dentro de state
        const { products, page, productInfo } = this.state;

        return (
            
            <div className="product-list">

                { products.map(product => (

                    <article key={ product._id }>

                        <strong>{product.title}</strong>                        <strong>{product.title}</strong>
                        <p>{product.description}</p>
                        <a href="#">Acessar</a>

                    </article>

                ))}

                <div className="actions" >
                    <button disabled={ page === 1 } onClick={this.prevPage} >Anterior</button>
                    <button disabled={ page === productInfo.pages } onClick={this.nextPage}>Proximo</button>
                </div>

            </div>
        );

    }
}