import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Restaurants from './Restaurants';
import RestaurantList from './RestaurantList';
import SingleRestaurant from './SingleRestaurant';
import Pizzas from './Pizzas'
import PizzaList from './PizzaList';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<>
        <Restaurants/>
        <Pizzas/>
        </>} />
        <Route path="/restaurants" exact element={<RestaurantList/>} />
        <Route path="/pizzas" exact element={<PizzaList/>} />
        <Route path="/restaurants/:id" element={<SingleRestaurant/>} />
        </Routes>
    </Router>
  );
}

export default App;
