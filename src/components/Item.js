import React, {useState} from "react";


function Item({ name, category }) {

  const [isInCart, setIsInCart] = useState(false);

  const handleAddToCartButton = () =>{
    setIsInCart(!isInCart);

    const liClass = isInCart ?
  }
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
