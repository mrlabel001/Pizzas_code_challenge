import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

const RestaurantList = () => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetch("http://127.0.0.1:5000/restaurants")
        .then((res) => res.json())
        .then((data) => setData(data));
    }, []);

    return (
        <div>
            <h2>Restaurant List</h2>
            <ol>
                {data.map((restaurant) => (
                    <li key={restaurant.id}>
                        <Link to={'/restaurants/${restaurants.id}'}>
                            {restaurant.name}
                        </Link>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default RestaurantList;