import React, { useState } from "react";

const Form = ({ addFoods }) => {
	const [name, setName] = useState("");
	const [calories, setCalories] = useState("");
    const [image, setImage] = useState("");
    const [quantity, setQuantity] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		const food = { name, calories, image, quantity };
		console.log(food);
		addFoods(food);
	};

	return (
		<form className="form" onSubmit={handleSubmit}>
			<label htmlFor="name" className="label">Name</label>
			<input type="text" className="input" name="name" id="name" value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<label htmlFor="calories" className="label">Calories</label>
			<input type="number" className="input" name="calories" id="calories" value={calories}
				onChange={(e) => setCalories(e.target.value)}
			/>
            <label htmlFor="image" className="label">Image</label>
            <input type="text" className="input" name="image" id="image" value={image}
				onChange={(e) => setImage(e.target.value)}
			/>
			<label htmlFor="quantity" className="label">Quantity</label>
            <input type="number" className="input" name="image" id="image" value={quantity}
				onChange={(e) => setQuantity(e.target.value)}
			/>
			<button
            className="button"
            >
            Add a food
            </button>
		</form>
	);
};

export default Form;
