import CartWidget from "../cartWidget/cartWidget.jsx";
import { Link, NavLink} from "react-router-dom";
import "./Navbar.css";


const Navbar = () => {
  return (
    <div className="navbarFondo">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <Link to="/" className="navbar logo">
            <img src="../src/assets/images/pok-mon-go-logo-png-30.png" alt="Logo" className="logo-img" />
            </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse nave" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/category/Comun" className="nav-link" aria-current="page" href="#">Comunes</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/category/Especial" className="nav-link" href="#">Especiales</NavLink>
              </li>
            </ul>
          </div>
          <CartWidget />
        </div>
      </nav>
    </div>
  );
};
export default Navbar;