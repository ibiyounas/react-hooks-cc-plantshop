import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {
  return (
    <ul className="cards" id="plant-item">
      {plants.map((plant) => (
      <PlantCard key = {plant.id} name={plant.name} image={plant.image} price={plant.price} ></PlantCard>
    ))}</ul>
  );
}

export default PlantList;
