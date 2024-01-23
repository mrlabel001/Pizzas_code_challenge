import React from 'react';
import { Link } from 'react-router-dom';

const Pizzas = () => {
    return (
        <div>
            <h2>Pizzas</h2>
            <Link to="/pizzas">View Pizza List</Link>
        </div>
    );
};

export default Pizzas;