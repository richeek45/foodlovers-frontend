import React from "react";

const Dropdown = ({onSelectCategory}) => {
  return (
    <div className="dropdown">
      <ul className=" absolute list bg-mid-gray pv3 ph2">
        <li
          className="db no-underline ph2 pv1 sans-serif light-gray hover-bg-near-white hover-dark-gray nowrap"
          onClick={() => onSelectCategory("fried")}
        >
          Breakfast
        </li>
        <li
          className="db no-underline ph2 pv1 sans-serif light-gray hover-bg-near-white hover-dark-gray nowrap"
          onClick={() => onSelectCategory("burger")}
        >
          Chicken
        </li>
        <li
          className="db no-underline ph2 pv1 sans-serif light-gray hover-bg-near-white hover-dark-gray nowrap"
          onClick={() => onSelectCategory("burger")}
        >
          Biryani
        </li>
        <li
          className="db no-underline ph2 pv1 sans-serif light-gray hover-bg-near-white hover-dark-gray nowrap"
          onClick={() => onSelectCategory("grilled")}
        >
          Naan
        </li>
        <li
          className="db no-underline ph2 pv1 sans-serif light-gray hover-bg-near-white hover-dark-gray nowrap"
          onClick={() => onSelectCategory("grilled")}
        >
          Paneer
        </li>
        <li
          className="db no-underline ph2 pv1 sans-serif light-gray hover-bg-near-white hover-dark-gray nowrap"
          onClick={() => onSelectCategory("grilled")}
        >
          Desert
        </li>
        <li
          className="db no-underline ph2 pv1 sans-serif light-gray hover-bg-near-white hover-dark-gray nowrap"
          onClick={() => onSelectCategory("chicken")}
        >
          All
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
