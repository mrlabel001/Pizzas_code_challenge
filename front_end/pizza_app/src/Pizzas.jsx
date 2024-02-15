import React, { useEffect, useState } from "react";

function Pizzas() {
  const [data, setData] = useState([]);
  const [selectedPizza, setSelectedPizza] = useState(null);
  const [updatedName, setUpdatedName] = useState("");
  const [updatedIngredient, setUpdatedIngredient] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:5000/pizzas")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handleUpdate = (id) => {
    fetch(`http://127.0.0.1:5000/pizzas/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: updatedName,
        ingredient: updatedIngredient,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setSelectedPizza(null);
        setUpdatedName("");
        setUpdatedIngredient("");
      })
      .catch((error) => console.error("Error updating pizza:", error));
  };

  const handleDelete = (id) => {
    fetch(`http://127.0.0.1:5000/pizzas/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setData(data.filter((pizza) => pizza.id !== id));
        setSelectedPizza(null);
        setUpdatedName("");
        setUpdatedIngredient("");
      })
      .catch((error) => console.error("Error deleting pizza:", error));
  };

  return (
    <div>
      <h2>pizza List</h2>
      <ul>
        {data.map((pizza) => (
          <li key={pizza.id}>
            <p>{pizza.name}</p>
            <p>{pizza.ingredient}</p>
            <button onClick={() => setSelectedPizza(pizza)}>
              Update
            </button>
            <button onClick={() => handleDelete(pizza.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      {selectedPizza && (
        <div>
          <h2>Update pizza</h2>
          <input
            type="text"
            placeholder="Enter updated name"
            value={updatedName}
            onChange={(e) => setUpdatedName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter updated ingredient"
            value={updatedAddress}
            onChange={(e) => setUpdatedIngredient(e.target.value)}
          />
          <button onClick={() => handleUpdate(selectedPizza.id)}>
            Update pizza
          </button>
        </div>
      )}
    </div>
  );
}

export default Pizzas;