import React, { useState } from 'react';
import './App.css';
import initialFoods from './foods.json';
import FoodBoxList from './Components/FoodBoxList';
import Form from './Components/Form';
import Search from "./Components/Search";
import TodaysFood from './Components/TodaysFood';


function App() {
  const [foods, setFoods] = useState(initialFoods);
  const [searchedString, setSearchedString] = useState("");
  const [hidden, setHidden] = useState(true);

  const addFoods = (food) => {
    setFoods([...foods, food]);
    setHidden(!hidden);
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
      <button
      hidden={!hidden}
      onClick={(()=> setHidden(!hidden))}
      >
        Add a new food
      </button>
      {!hidden && <Form addFoods={addFoods} />}
      <Search
        searchedString={searchedString}
        callbackSearch={setSearchedString}
      />
      <div className="columns">
        <FoodBoxList
          className="column FoodBoxList"
          foods={searchedFood}
        />
        <TodaysFood
          className="column TodaysFood"
        />
      </div>
    </div>
  );
}

export default App;
