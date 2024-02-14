import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/pizzas">
        <button>Pizzas</button>
      </Link>
      <Link to="/restaurants">
        <button>Restaurants</button>
      </Link>
      <Link to="/restaurant-pizzas">
        <button>Restaurant Pizzas</button>
      </Link>
    </div>
  );
};

export default NavBar;
