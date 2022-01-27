import React, { useState } from 'react';
import './App.css';
import initialFoods from './foods.json';
import FoodBoxList from './Components/FoodBoxList';
import Form from './Components/Form';
import Search from "./Components/Search";


function App() {
  const [foods, setFoods] = useState(initialFoods);
  const [searchedString, setSearchedString] = useState("");

  const addFoods = (food) => {
    setFoods([...foods, food]);
  };

  let searchedFood = null;
  if (searchedString !== "") {
    searchedFood = foods.filter((food) => {
      return food.name.toLowerCase().includes(searchedString.toLowerCase());
    });
  } else {
    searchedFood = foods;
  }

  return (
    <div className="App">
      <Form addFoods={addFoods} />
      <Search
        searchedString={searchedString}
        callbackSearch={setSearchedString}
      />
      <FoodBoxList
        foods={foods}
        foods={searchedFood}
      />
    </div>
  );
}

export default App;
