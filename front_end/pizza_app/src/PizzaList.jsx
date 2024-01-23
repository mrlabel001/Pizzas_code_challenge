import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

const PizzaList = () => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetch("http://127.0.0.1:5000/pizzas")
        .then((res) => res.json())
        .then((data) => setData(data));
    }, []);

    return (
        <div>
            <h2>Pizza List</h2>
            <ol>
                {data.map((pizza) => (
                    <li key={pizza.id}>
                        {pizza.name}
                        {pizza.ingredient}
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default PizzaList;