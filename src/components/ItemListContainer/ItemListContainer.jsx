import React from "react";
import './itemContainer.css';

const ItemListContainer = (props) => {
    const {titulo} = props
    return (
      <div className="itemContainer">
        <div>
          <h1>{titulo}</h1>
        </div>
      </div>
    );
  };

export default ItemListContainer;