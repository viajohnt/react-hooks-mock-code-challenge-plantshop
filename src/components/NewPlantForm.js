import React, {useState} from "react";

function NewPlantForm(props) {

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    image: "",
    price: 0,
  })

  function handleSubmit(event){
    event.preventDefault();
    event.target.reset()
    props.newPlant(formData)
  }

  function handleChange(event){
    const {name, value} = event.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
      id: props.plantData.length + 1
    })
  )
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit= {handleSubmit}>
        <input onChange={handleChange} value={formData.name} type="text" name="name" placeholder="Plant name" />
        <input onChange={handleChange} value={formData.image}type="text" name="image" placeholder="Image URL" />
        <input onChange={handleChange} value={formData.price} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
