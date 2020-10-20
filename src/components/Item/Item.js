import React from "react";

import { FiPlus } from "react-icons/fi";

import * as classes from "./Item.module.css";

const Item = ({ imageURL, name, price, addToCart }) => {
  return (
    <div className={classes.itemWrapper}>
      <div
        className={classes.addButtonWrapper}
        title="add to cart"
        onClick={addToCart}
      >
        <FiPlus className={classes.addButton} />
      </div>
      <img src={imageURL} className={classes.itemImage} alt={name} />
      <hr />
      <p className={classes.itemName}>{name}</p>
      <p className={classes.itemPrice}>{price}</p>
    </div>
  );
};

export default Item;
