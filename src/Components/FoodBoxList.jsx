import React from "react";
import OneFoodBox from './OneFoodBox';

const FoodBoxList = (props) => {
	const { foods } = props;
	return (
		<>
			{foods.length > 0 ? (
				<div className="foodbox-list">
					{foods.map((food, i) => {
						//console.log(food);
						return (
							<OneFoodBox
								key={i}
                                name={food.name}
								calories={food.calories}
								image={food.image}
                                quantity={food.quantity}
								// deleteContact={deleteContact}
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
