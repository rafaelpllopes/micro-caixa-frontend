import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './reset.css';
import './index.css';
import App from './App'
import Clientes from './Clientes'

ReactDOM.render(
  (<Router>
    <App>
      <Route path='/clientes' component={Clientes} />
      {/* <Route path='/vendedores' component={Vendedores} /> */}
      {/* <Route path='/produtos' component={Produtos} />
    <Route path='/Vendas' component={Vendas} /> */}
    </App>
  </Router>),
  document.getElementById('root')
);