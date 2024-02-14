import React from 'react';
import HomePage from './HomePage';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Pizzas from './Pizzas';
import Restaurants from './Restaurants';
import RestaurantPizzas from './RestaurantPizzas';

const App = () => {
  return (
    <div>
      <h1>Pizza inn</h1>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pizzas" element={<Pizzas />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/restaurant-pizzas" element={<RestaurantPizzas />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

