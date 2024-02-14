import { useEffect, useState, } from "react";

function RestaurantPizzas(){
    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetch("http://127.0.0.1:5000/restaurant_pizzas")
        .then((res) => res.json())
        .then((data) => setData(data));
    }, []);

    return (
        <div>
            <h2>Restaurant_pizza List</h2>
            <ol>
                {data.map((rest_pizza) => (
                    <li key={rest_pizza.id}>
                        <p>{rest_pizza.price}</p>
                        <p>{rest_pizza.pizza_id}</p>
                        <p>{rest_pizza.restaurant_id}</p>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default RestaurantPizzas;