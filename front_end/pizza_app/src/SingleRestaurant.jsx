import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

const SingleRestaurant = () => {
    const [data, setData] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch("http://127.0.0.1:5000/restaurants/${id}")
        .then((res) => res.json())
        .then((data) => setData(data))
    }, [id]);

    return (
        <div>
            <p>{data.id}</p>
            <h2>{data.name}</h2>
            <p>{data.address}</p>
            <button onClick={handleDelete}>Delete Restaurant</button>
        </div>
    )
};

export default SingleRestaurant;