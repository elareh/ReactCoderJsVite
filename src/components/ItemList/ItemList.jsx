import propTypes from "prop-types";
import { Link } from "react-router-dom";

const ItemList = ({ items }) => {
    return (
        <div className="container">
        <h1 className="text-center my-4">ItemList</h1>
        <div className="row">
            {items.map((item) => (
                <div key={item.id} className="col-md-4 mb-4">
                    <div className="card">
                        <Link to={`/item/${item.id}`}>
                            <div className="card-body">
                                <img src={item.image} alt={item.name} />
                                <h3 className="card-title">{item.name}</h3>
                                <p className="card-text">{item.price}</p>
                                <p className="card-text">{item.category}</p>
                            </div>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    </div>
    );
};

ItemList.propTypes = {
    items: propTypes.array.isRequired,
}

export default ItemList;