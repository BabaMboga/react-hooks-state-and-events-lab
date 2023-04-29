import React, {useState} from "react";


function Item({ name, category }) {

  const [isInCart, setIsInCart] = useState(false);

  const handleAddToCartButton = () =>{
    setIsInCart(!isInCart);

    const liClass = isInCart ? "in-cart" : "";
  }
  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCartButtonClick}>{isInCart ? "Remove From Cart": "Add to Cart"}</button>
    </li>
  );
}

export default Item;
