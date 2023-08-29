import React from "react";
import './navbar.css'
import CartWidget from "../cartWidget/cartWidget.jsx";
import { Link, NavLink} from "react-router-dom";


const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <h1>
      <Link to="/">Ecommerce Coder</Link>
    </h1>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/category/phones" className="nav-link active" aria-current="page" href="#">Telefonos</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/category/phones" className="nav-link" href="#">Categorias</NavLink>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contacto</a>
        </li>
      </ul>
    </div>
    <CartWidget />
  </div>
</nav>
  )
}
export default Navbar;