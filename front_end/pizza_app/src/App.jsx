import { useState } from 'react';
import Pizzas from './Pizzas';
import Restaurants from './Restaurants';
import RestaurantPizza from './RestaurantPizza';



function App() {

  return (
    <>
   <h1>Pizza Inn</h1>
   <div><Pizzas/></div>
   <div><Restaurants/></div>
   <div><RestaurantPizza/></div>
    </>
  )
}

export default App
