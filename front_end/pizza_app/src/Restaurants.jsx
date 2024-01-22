import React, { useEffect, useState } from 'react';

const Restaurants = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("http://127.0.0.1:5000/restaurants")
        .then((res) => res.json())
        .then(data => setData(data))
    })

  return (
    <div>
    <h2>Restaurants</h2>
    <ol>
        {data.map((restaurant) => (
            <li key={restaurant.id}>
                <h3>{restaurant.name}</h3>
                <p>{restaurant.description}</p>
            </li>
        ))}
    </ol>
</div>
  );
};

export default Restaurants;