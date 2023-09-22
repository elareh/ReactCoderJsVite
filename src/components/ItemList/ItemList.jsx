import propTypes from "prop-types";
import { Link } from "react-router-dom";
import "./ItemList.css";

const ItemList = ({ items, isLoading }) => {
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="fondo">
    <div className="checkout">
    </div>
      <div className="container">
        <div className="row">
                  {items.map((item) => (
                  <div key={item.id} className="col-lg-4 col-md-6 card-custom">
                    <div className="card">
                          <img src={item.image} className="image" alt="" />
                          <div className="card-body">
                        <h3 className="card-text-custom">{item.title}</h3>
                        <p className="card-text-custom">${item.price}</p>
                        <button type="button">
                        <Link to={`/item/${item.id}`}>
                         Ver Mas
                        </Link>
                        </button>
                        </div>
                    </div>
                  </div>
                  ))};
            </div>
         </div>
      </div>

  );
};

ItemList.propTypes = {
  items: propTypes.array.isRequired,
  isLoading: propTypes.bool,
};

export default ItemList;