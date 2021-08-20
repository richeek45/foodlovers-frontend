import React from "react";

const Card = ({ name, price, rating, image }) => {
  
  return (
    <div className="tc bg-light-yellow dib br3 ma3 bw2 shadow-3 pb3">
      <img src={`img/${image}`} alt={image} width="300" height="300" />
      <h3>{name} </h3>
      <p>Price: {price} </p>
      <p>Rating: {rating} </p>
      <a
        href="http://127.0.0.1:8000/api/v1/users"
        className="link b f4 dib gray bg-animate hover-bg-green hover-white  no-underline pv2 ph4 br-pill ba b--white-20"
      >
        Order
      </a>
    </div>
  );
};

export default Card;
