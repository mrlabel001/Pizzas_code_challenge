import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DeleteRestaurant from './DeleteRestaurant';

const SingleRestaurant = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/restaurants/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error: ${res.statusText}`);
        }
        return res.json();
      })
      .then((data) => setData(data))
      .catch((error) => console.error('Error:', error));
  }, [id]);

  return (
    <div>
      {data && (
        <div>
          <p>{data.id}</p>
          <p>{data.name}</p>
          <p>{data.address}</p>
          <DeleteRestaurant />
        </div>
      )}
    </div>
  );
};

export default SingleRestaurant;
