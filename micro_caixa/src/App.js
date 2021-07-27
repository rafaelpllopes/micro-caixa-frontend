import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default class Clientes extends Component {
  render() {
    return (<>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-uppercase">
          <div className="container-fluid">
            <Link className="navbar-brand" to='/'>
              <img src="./assets/img/logoipsum.png" alt="Logoipsum" class="d-inline-block align-text-top" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to='/clientes'>Clientes</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/vendedor'>Vendedores</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/produtos'>Produtos</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/vendas'>Vendas</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main className="container">
        {this.props.children}
      </main>
      <footer className="footer navbar-fixed-bottom">
        <p className="text-uppercase text-center">© 2021 Rafael Pereira de Lacerda Lopes</p>
      </footer>
    </>);
  }
}
