import React from 'react';
import '../styles/NavBar/index.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <header>
      <div className="flex-container">
        <Link to="/customer/products" className="produtos">
          <h5>
            Produtos
          </h5>
        </Link>

        <Link to="/customer/orders">
          <h5>
            Meus Pedidos
          </h5>
        </Link>
      </div>

      <div className="flex-container">
        <div className="name">
          <h5>
            Cicrano da Silva
          </h5>
        </div>

        <Link to="/login" className="logout">
          <h5>
            Sair
          </h5>
        </Link>
      </div>
    </header>
  );
}

export default NavBar;
