import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
let myGlobalPlant

function PlantPage() {
  const [search, setSearch] = useState("")
  const [plantData, setPlantData] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(response => response.json())
    .then(data => setPlantData(data))
    }, [])

  useEffect(() => {
    myGlobalPlant && fetch("http://localhost:6001/plants" , {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(myGlobalPlant)
    })
  }, [myGlobalPlant])

  console.log(plantData)

  function newPlant(myPlant){
    myGlobalPlant = myPlant
    setPlantData(prevData => [...prevData, myPlant])
  }

  const plantsToDisplay = plantData.filter(plant => plant.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <main>
      <NewPlantForm plantData={plantData} newPlant={newPlant}/>
      <Search search={search} setSearch={setSearch}/>
      <PlantList  plantData= {plantsToDisplay}/>
    </main>
  );
}

export default PlantPage;
