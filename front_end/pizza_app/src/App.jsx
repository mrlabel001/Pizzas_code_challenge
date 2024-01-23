import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Restaurants from './Restaurants';
import RestaurantList from './RestaurantList';
import SingleRestaurant from './SingleRestaurant';
import Pizzas from './Pizzas'
import PizzaList from './PizzaList';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Restaurants} />
        <Route path="/" exact component={Pizzas} />
        <Route path="/restaurants" exact component={RestaurantList} />
        <Route path="/pizzas" exact component={PizzaList} />
        <Route path="/restaurants/:id" component={SingleRestaurant} />
      </Switch>
    </Router>
  );
}

export default App;
