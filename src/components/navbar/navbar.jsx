import CartWidget from "../cartWidget/cartWidget.jsx";
import { Link, NavLink} from "react-router-dom";


const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div>
          <h1>
            <Link to="/">Ecommerce</Link>
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
                <NavLink to="/category/tablets" className="nav-link" href="#">Tablets</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/category/notebooks" className="nav-link" href="#">Notebooks</NavLink>
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