import React, { useState } from 'react';

const AddPizzaToRestaurant = ({ restaurantId }) => {
  const [price, setPrice] = useState('');
  const [pizzaId, setPizzaId] = useState('');
  const [error, setError] = useState(null);

  const handleAddPizza = () => {
    const pizzaData = {
      price: parseFloat(price),
      pizza_id: parseInt(pizzaId, 10),
      restaurant_id: restaurantId,
    };

    fetch('http://127.0.0.1:5000/restaurant_pizzas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pizzaData),
    })
      .then((res) => {
        if (res.ok) {
          console.log('Pizza added successfully');
        } else {
          throw new Error(`Error: ${res.statusText}`);
        }
      })
      .catch((error) => setError(`Error: ${error}`));
  };

  return (
    <div>
      <h2>Add Pizza to Restaurant</h2>
      <label>
        Price:
        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
      </label>
      <label>
        Pizza ID:
        <input type="text" value={pizzaId} onChange={(e) => setPizzaId(e.target.value)} />
      </label>
      <button onClick={handleAddPizza}>Add Pizza</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default AddPizzaToRestaurant;
