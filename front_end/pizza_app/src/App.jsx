import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Restaurants from './Restaurants';
import RestaurantList from './RestaurantList';
import SingleRestaurant from './SingleRestaurant';
import Pizzas from './Pizzas'
import PizzaList from './PizzaList';
import DeleteRestaurant from './DeleteRestaurant';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<>
        <Restaurants/>
        <Pizzas/>
        </>} />
        <Route path="/restaurants" element={<RestaurantList/>} />
        <Route path="/pizzas" element={<PizzaList/>} />
        <Route path="/restaurants/:id" element={<SingleRestaurant/>} />
        <Route path='/restaurants/:id/delete' element={<DeleteRestaurant/>}/>
        </Routes>
    </Router>
  );
}

export default App;
