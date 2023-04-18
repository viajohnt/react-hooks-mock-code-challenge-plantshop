import React from "react";
import PlantCard from "./PlantCard";

function PlantList(props) {
  const plantCards = props.plantData.map((plant) => 
    <PlantCard 
      key={plant.id}
      name={plant.name}
      image={plant.image}
      price={plant.price}
    />
  )
 
  return (
    <ul className="cards">
      {plantCards}
    </ul>
  );
}

export default PlantList;
