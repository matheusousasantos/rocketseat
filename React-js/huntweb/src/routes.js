import React from 'react';

//Componentes do 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Importa a página Main
import Main from './pages/main';

//Importa a página Product
import Product from './pages/product';


//Componente criado como function
const Routes = () => (

// Switch - Permite que apenas uma única rota seja chamada ao 
//          mesmo tempo.
//          Uma página será exibida a cada rota

// Route - Rota

// Path - Caminho

// component={} - Componente que eu irei mostrar quando 
//                acessar a rota



// Define que estamos utilizando as rotas através de um browser
   <BrowserRouter >
        <Switch>

            <Route exact path="/" component={ Main } />
            <Route path="/products/:id" component={ Product } />

        </Switch>
   </BrowserRouter> 
)

export default Routes;