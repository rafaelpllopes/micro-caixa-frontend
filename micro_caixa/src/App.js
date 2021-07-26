import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (<>
    <header>
      <div className="flex-header">
        {/* <a className="navbar-brand" href=""><img src="#" className="img-fluid img" alt="Logo"></a> */}
        <div className="descricao">
          <p className="text-uppercase">Micro Caixa</p>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-uppercase">
        <div className="container-fluid">
          <a className="navbar-brand" href="./">

          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="./cliente">Cliente</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./">Vendedor</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./">Produtos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./">Venda</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <main>
    </main>
    <footer>
      <p className="text-uppercase text-center">© 2021 Rafael Pereira de Lacerda Lopes</p>
    </footer>
  </>);
}

export default App;
