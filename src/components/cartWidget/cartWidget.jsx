import { useContext } from "react";
import CartContext from "../../context/CartContext.js";
import { getCartQuantity } from "../../utils";
import { Link } from "react-router-dom";
import "./CartWidget.css";


const CartWidget = () => {
    const { cart } = useContext(CartContext);

    const quantity = getCartQuantity(cart);

    return (
        <>
        <button className="btn btn-outline-white position-relative icono">
        <Link to="/checkout">
        <i className="bi bi-cart icono"></i>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{quantity > 0 ? quantity : ""}</span>
        </Link>
        </button>
        </>
    );
};

export default CartWidget;