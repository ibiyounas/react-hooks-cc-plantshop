/*import React from "react";
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
*/
import React, { useContext } from "react";
import PlantCard from "./PlantCard";
import { PlantContext } from "./App";

function PlantList({handleDelete}) {
  const { filteredPlants } = useContext(PlantContext);
  const plantListOfCards = filteredPlants.map((plant) => (
    <PlantCard
      key={plant.id}
      name={plant.name}
      price={plant.price}
      image={plant.image}
      id={plant.id}
      handleDelete={handleDelete}
    />
  ));
  return <ul className="cards">{plantListOfCards}</ul>;
}

export default PlantList