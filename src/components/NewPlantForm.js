import React, {useState} from "react";

function NewPlantForm(updatePlant) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);
  
  const [isEmpty, setIsEmpty] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    let newPlant = {name, image, price};
    console.log({name, image, price})

    if ((name.length > 0) & (image.length > 0) & (price.length > 0)) {
      fetch("http://localhost:6001/plants", {method: "POST", headers: {
      "Content-Type": "Application/JSON",},
      body: JSON.stringify(newPlant),
    })
    .then((resp) => resp.json())
    .then((plant) => {
      console.log(plant);
      updatePlant(plant)
      setIsEmpty(false)
    })
  }
  else {
    setIsEmpty(true)

  }
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit ={onSubmit}>
        <input type="text" name="name" value={name} placeholder="Plant name" onChange={(e) => setName(e.target.value)}/>
        <input type="text" name="image" value={image} placeholder="Image URL" onChange={(e) => setImage(e.target.value)}/>
        <input type="number" name="price" value={price}  step="0.01" placeholder="Price" onChange={(e) => setPrice(e.target.value)}/>
        <button type="submit">Add Plant</button>
      </form>
      
      <p style={{ color: "red" }}>
        {isEmpty ? "* Fields cannot be empty" : ""}
      </p>
    </div>
  );
}

export default NewPlantForm;
