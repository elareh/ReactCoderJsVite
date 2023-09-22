import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./ItemDetail.css";


const ItemDetail = ({ item, isLoading, addItem, }) => {
    if (isLoading) {
      return <h2>Loading...</h2>;
    }
  
    if (!item) {
      return <h2>Product not found</h2>;
    }
  
    return (
      <div className="container detailcontainer">
      <div className="row">
        <div className="col-md-6">
          <img src={item.image} alt="" className="img-fluid imgdetailcustom" />
        </div>
        <div className="col-md-6 textosDetail">
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <p>Precio: ${item.price}</p>
          <p>Categoría: {item.categoryId}</p>
          <button className="botonesdetail" onClick={() => addItem(item, 1)}>Agregar al Carrito</button>
          <div>
          <button  type="button" className="btn btn-dark botonesdetail">
            <Link to="/checkout">Ir a finalizar compra</Link>
          </button>
          </div>
        </div>
      </div>
    </div>
    );
  };
  
  ItemDetail.propTypes = {
    item: PropTypes.object,
    isLoading: PropTypes.bool,
    addItem: PropTypes.func,
  };
  
  export default ItemDetail;