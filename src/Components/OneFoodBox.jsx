import React, { useState } from "react";

const OneFoodBox = ({ name, calories, image, quantity, addTodaysFood }) => {
  const [currentQTY, setCurrentQTY] = useState(0);
  
  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={image} alt={name} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{name}</strong> <br />
              <small>{calories} cal</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input className="input" type="number" value={currentQTY} onChange={(e) => setCurrentQTY(Number(e.target.value))} />
            </div>
            <div className="control">
              <button className="button is-info" onClick={() => addTodaysFood(name, currentQTY, calories)}>
                +
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default OneFoodBox;

