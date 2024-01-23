import React from 'react';
import { Link } from 'react-router-dom';

const Restaurants = () => {
    return (
        <div>
            <h2>Restaurants</h2>
            <Link to="/restaurants">View Restaurant List</Link>
        </div>
    );
};

export default Restaurants;
