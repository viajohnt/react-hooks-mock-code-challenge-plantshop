import React, {useState} from "react";

function PlantCard(props) {
  const [isInStock, setIsInStock] = useState(true)
  
  function toggleInStock(){
    setIsInStock(prevState => !prevState)
  }

  return (
    <li className="card">
      <img src={props.image} alt={props.name} />
      <h4>{props.name}</h4>
      <p>Price: {props.price}</p>
      {isInStock ? (
        <button onClick={toggleInStock} className="primary">In Stock</button>
      ) : (
        <button onClick={toggleInStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
