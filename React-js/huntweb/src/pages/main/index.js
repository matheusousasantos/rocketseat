import React, { Component } from 'react';

import api from '../../services/api';

export default class Main extends Component {

//  Método:
//  Assim que o componente for mostrado em tela
    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get(`/products`);
        console.log(response.data.docs);
    }

    render() {
        return <h1>Hello Rocketeat</h1>
    }
}