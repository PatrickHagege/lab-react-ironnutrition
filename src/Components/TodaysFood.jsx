import React from 'react';

function TodaysFood({ todaysFoodList, deleteFood }) {

  const calculateElementCalories = (el) => {
    return el.quantity * el.calories;
  }
  const calculateTheTotal = (list) => list.reduce((sum, item) => sum + item.calories * item.quantity, 0)

  return <div id="TodaysFood" className="TodaysFood">
    <h2>Today's food</h2>
    <ul>
      {todaysFoodList.map((el) => {
        return (
        <li className="food" key={el.name}>
          ◦ {el.quantity} {el.name}{el.quantity > 1 && ('s')} =  {calculateElementCalories(el)}
          <button class="delete is-small is-danger" onClick={() => deleteFood(el.name)}></button>
        </li>
        )
      })}
    </ul>
    <br/> Total = {calculateTheTotal(todaysFoodList)}
  </div>;
}

export default TodaysFood;
