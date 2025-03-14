import React from "react";

function Card({ title, image, price }) {
  console.log("Card Data:", { title, image, price });

  return (
    <div className="card-container">
      <div className="card">
        <div className="card-img">
          <img src={image} width={250} height={300} alt={title} />
        </div>
        <div className="text">
          <h3>{title}</h3>
          <h5>Price: ${price}</h5>
          <div className="btn">
            <button className="Card-btn">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
