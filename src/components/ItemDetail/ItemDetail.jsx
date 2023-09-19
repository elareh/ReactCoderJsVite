import PropTypes from "prop-types";


const ItemDetail = ({ item }) => {

    if (!item) {
        return null;
    }


    return (
        <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-6">
                <div className="card text-center">
                    <img src={item.image} alt={item.name} className="card-img-top" />
                    <div className="card-body">
                        <h1 className="card-title">{item.name}</h1>
                        <p className="card-text">{item.price}</p>
                        <p className="card-text">{item.category}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

ItemDetail.propTypes = {
    item: PropTypes.object
}

export default ItemDetail;