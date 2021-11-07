import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const [services, setServices] = useState([]);
    const { serviceId } = useParams();
    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div>
            <h2>this is booking page:{services.servicename}</h2>
        </div>
    );
};

export default Booking;