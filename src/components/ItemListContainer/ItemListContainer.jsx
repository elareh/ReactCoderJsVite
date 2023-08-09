import React from "react";
import './itemContainer.css';

const ItemListContainer = ({ greetings }) => {
    return (
      <div className="itemContainer">
        <div>
          <h1>{greetings}</h1>
        </div>
      </div>
    );
  };

export default ItemListContainer;