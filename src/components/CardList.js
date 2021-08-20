import React, { Fragment } from "react";
import Card from "./Card";

const CardList = ({ meals }) => {
  return (
    <Fragment>
      {meals.map((meal) => {
        return (
          <Card
            key={meal._id}
            name={meal.name}
            price={meal.price}
            rating={meal.rating}
            image={meal.photo}
          />
        );
      })}
    </Fragment>
  );
};

export default CardList;
