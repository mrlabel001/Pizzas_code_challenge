import React, { useEffect, useState } from "react";

function Restaurants() {
  const [data, setData] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [updatedName, setUpdatedName] = useState("");
  const [updatedAddress, setUpdatedAddress] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:5000/restaurants")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handleUpdate = (id) => {
    fetch(`http://127.0.0.1:5000/restaurants/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: updatedName,
        address: updatedAddress,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setSelectedRestaurant(null);
        setUpdatedName("");
        setUpdatedAddress("");
      })
      .catch((error) => console.error("Error updating restaurant:", error));
  };

  const handleDelete = (id) => {
    fetch(`http://127.0.0.1:5000/restaurants/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setData(data.filter((restaurant) => restaurant.id !== id));
        setSelectedRestaurant(null);
        setUpdatedName("");
        setUpdatedAddress("");
      })
      .catch((error) => console.error("Error deleting restaurant:", error));
  };

  return (
    <div>
      <h2>Restaurant List</h2>
      <ul>
        {data.map((restaurant) => (
          <li key={restaurant.id}>
            <p>{restaurant.name}</p>
            <p>{restaurant.address}</p>
            <button onClick={() => setSelectedRestaurant(restaurant)}>
              Update
            </button>
            <button onClick={() => handleDelete(restaurant.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      {selectedRestaurant && (
        <div>
          <h2>Update Restaurant</h2>
          <input
            type="text"
            placeholder="Enter updated name"
            value={updatedName}
            onChange={(e) => setUpdatedName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter updated address"
            value={updatedAddress}
            onChange={(e) => setUpdatedAddress(e.target.value)}
          />
          <button onClick={() => handleUpdate(selectedRestaurant.id)}>
            Update Restaurant
          </button>
        </div>
      )}
    </div>
  );
}

export default Restaurants;
