import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

const DeleteRestaurant = () => {
  const { id } = useParams();
  const history = useHistory();
  const [error, setError] = useState(null);

  const handleDelete = () => {
    fetch(`http://127.0.0.1:5000/restaurants/${id}`, {
      method: 'DELETE',
    })
      .then((res) => {
        if (res.ok) {
          history.push('/restaurants'); 
        } else {
          throw new Error(`Error: ${res.statusText}`);
        }
      })
      .catch((error) => setError(`Error: ${error}`));
  };

  return (
    <div>
      <button onClick={handleDelete}>Yes, Delete</button>
    </div>
  );
};

export default DeleteRestaurant;
