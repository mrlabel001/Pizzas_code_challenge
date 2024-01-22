import React, { useEffect, useState } from 'react';

const Pizzas = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("http://127.0.0.1:5000/pizzas")
        .then((res) => res.json())
        .then(data => setData(data))
    })

  return (
    <div>
    <h2>Pizzas</h2>
    <ol>
        {data.map((pizza) => (
            <li key={pizza.id}>
                <h3>{pizza.name}</h3>
            </li>
        ))}
    </ol>
</div>
  ); 
};

export default Pizzas;