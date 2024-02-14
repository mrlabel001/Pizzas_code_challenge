import { useEffect, useState, } from "react";

function Pizzas(){
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
                        <p>{pizza.name}</p>
                        <p>{pizza.ingredients}</p>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default Pizzas;