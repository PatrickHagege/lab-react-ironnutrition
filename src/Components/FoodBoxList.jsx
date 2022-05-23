import React from "react";
import OneFoodBox from './OneFoodBox';

const FoodBoxList = ({ foods, addTodaysFood }) => {
	return (
		<>
			{foods.length > 0 ? (
				<div className="foodbox-list">
					{foods.map((food, i) => {
						return (
							<OneFoodBox
								key={i}
								name={food.name}
								calories={food.calories}
								image={food.image}
								quantity={food.quantity}
								addTodaysFood={addTodaysFood}
							/>
						);
					})}
				</div>
			) : (
				<p>No food already !</p>
			)}
		</>
	);
};

export default FoodBoxList;
