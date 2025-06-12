import React, { useState } from "react";

function Item({ name, category }) {
  let [isAdded, setAdded] = useState("")

  const addStatus = isAdded ? "in-cart" : ""

  const addToCart = () => [
    setAdded(isAdded => !isAdded)
  ]

  return (
    <li className={addStatus}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addToCart}>{isAdded ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
