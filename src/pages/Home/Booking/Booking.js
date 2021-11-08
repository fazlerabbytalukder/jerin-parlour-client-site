import { Alert, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const buttonDesign2 = {
    backgroundColor: '#F63E7B',
    padding: '5px 10px',
    borderRadius:'3px'
}


const Booking = ({ service }) => {
    const { user } = useAuth();
    const [bookingSuccess, setBookingSuccess] = useState(false);

    const initialInfo = {yourName:user.displayName, email:user.email}
    const [bookingInfo, setBookingInfo] = useState(initialInfo)

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;

        const newInfo = { ...bookingInfo };
        newInfo[field] = value;
        // console.log(newInfo);
        setBookingInfo(newInfo);
    }

    const handleBookingSubmit = e => {
        const booking = {
            ...bookingInfo,
            serviceName:service.servicename
        }
        // console.log(booking);

        //send data to the serer
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setBookingSuccess(true);
            }
        })
    
        e.preventDefault();
    }

    return (
        <>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 900, textAlign:'left' }}>Book</Typography>
            <form onSubmit={handleBookingSubmit} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'left' }}>
                <TextField
                    id="outlined-basic"
                    defaultValue={user.email}
                    onBlur={handleOnBlur}
                    name="email"
                    sx={{ width: "50%", backgroundColor: "white", mb: 1 }} />
                <TextField
                    id="outlined-basic"
                    name="yourName"
                    onBlur={handleOnBlur}
                    defaultValue={user.displayName}
                    sx={{ width: "50%", backgroundColor: "white", mb: 1 }} />
                <TextField
                    id="outlined-basic"
                    disabled
                    value={service.servicename}
                    sx={{ width: "50%", backgroundColor: "white", mb: 1 }} />
                {bookingSuccess && <Alert style={{width:'50%', margin:"5px 0"}} severity="success">Booking Successfull</Alert>}
                <Button type="submit" style={{width:'50%',...buttonDesign2, color:'white'}}>Book Now</Button>
            </form>
        </>
    );
};

export default Booking;