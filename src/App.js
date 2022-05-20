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
  const [todaysFood, setTodaysFood] = useState([]);

  const addFoods = (food) => {
    setFoods([...foods, food]);
    setHidden(!hidden);
  };

  const addTodaysFood = (name, quantity, calories) => {
    const clone = [...todaysFood];

    if (clone.length === 0) {
      clone.push({ name, quantity, calories })
      setTodaysFood(clone)
    }
    for (let i = 0; i < clone.length; i++) {
      const element = clone[i];
      let updatedQTY = 0;
      if (element.name === name && (clone.some(e => e.name === name)))  {
        console.log('element.name === name && (clone.some(e => e.name === name))')
        element.quantity += updatedQTY;
        const newElement = {name, quantity, calories};
        clone.splice(i, 1, newElement);
      } else if (element.name === name) {
        console.log('element.name === name')
        element.quantity += updatedQTY;
        const newElement = {name, quantity, calories};
        clone.splice(i, 1, newElement);
      } else if (element.name !== name && (!clone.some(e => e.name === name))){
        clone.push({ name, quantity, calories })
        // setTodaysFood(clone)
      }
    }
      console.log('apres le "for" clone vaut :', clone)
      console.log('apres le "for" quantity vaut :', quantity)
      setTodaysFood(clone)
  };
  

  let searchedFood = null;
  if (searchedString !== "") {
    searchedFood = foods.filter((food) => {
      return food.name.toLowerCase().includes(searchedString.toLowerCase());
    });
  } else {
    searchedFood = foods;
  }

  const deleteFood = (foodToDelete) => {
    const updatedTodaysFood = todaysFood.filter((foodElement) => {
      return foodElement.name !== foodToDelete;
    });
    setTodaysFood(updatedTodaysFood);
  };

  return (
    <div className="App">
      <button
        hidden={!hidden}
        onClick={(() => setHidden(!hidden))}
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
          addTodaysFood={addTodaysFood}
        />
        <TodaysFood
          todaysFoodList={todaysFood}
          deleteFood={deleteFood}
          className="column TodaysFood"
        />
      </div>
    </div>
  );
}

export default App;
