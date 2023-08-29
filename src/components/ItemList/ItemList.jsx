import React from "react";
import propTypes from "prop-types";

const ItemList = ({ items }) => {
    return (
        <div>
            <h1>ItemList</h1>


            <ul>
                {list.map((item) => (
                    <li key={item.id}>
                        <h3>{item.name}</h3>
                        <p>{item.price}</p>
                        <p>{item.category}</p>
                    </li>
                ))}
            </ul>
            
        </div>
    );
};

ItemList.propTypes = {
    items: propTypes.array.isRequired,
}

export default ItemList;