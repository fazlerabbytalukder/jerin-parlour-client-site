import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = ({service}) => {
    return (
        <div>
            <h2>this is booking page:{service.servicename}</h2>
        </div>
    );
};

export default Booking;