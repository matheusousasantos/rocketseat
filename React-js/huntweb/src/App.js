import React, { Component } from 'react';

import './style.css'

//Importando o Componente Header
import Header from './components/Header'

//Transformar ele em uma 'Stateless Component'
const App = () => (
   <div className="App">
     <Header />
   </div>
);

export default App;
