import React, { useState } from "react";

function PlantCard({ name, price, image, id, handleDelete }) {
  const [isStocked, setIsStocked] = useState(true);

  const handleIfInStock = () => setIsStocked(!isStocked);


  return (
    <li className="card" data-testid="plant-item">
        <img src={image ? image : "https://via.placeholder.com/400"} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <button
        className={isStocked ? "primary" : ""}
        onClick={handleIfInStock}
      >
        {isStocked ? "In Stock" : "Out of Stock"}
      </button>
      <button
        className= "delete-button"
        onClick={() => handleDelete(id)}
      >
        Delete  
      </button>
    </li>
  );
}
export default PlantCard;