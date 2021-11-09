import { Alert, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const buttonDesign2 = {
    backgroundColor: '#F63E7B',
    padding: '5px 10px',
    borderRadius:'3px'
}

const AddService = () => {
    const [service, setService] = useState({});
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field,value);

        const newReviewData = { ...service };
        newReviewData[field] = value;

        // console.log(newLoginData);
        setService(newReviewData);
    }

    const handleServiceSubmit = e => {
        const serviceInfo = {
            ...service,
        }

        //send data to the serer
        fetch('https://warm-caverns-33729.herokuapp.com/services', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(serviceInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess(true);
                }
                // console.log(data);
            })
        
        e.preventDefault();
    }
    return (
        <>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 900, textAlign:'left' }}>Review</Typography>
            <form onSubmit={handleServiceSubmit} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'left' }}>
                <TextField
                    id="outlined-basic"
                    defaultValue="Service Name"
                    onBlur={handleOnBlur}
                    name="servicename"
                    sx={{ width: "50%", backgroundColor: "white", mb: 1 }} />
                <TextField
                    id="outlined-basic"
                    name="price"
                    onBlur={handleOnBlur}
                    defaultValue="Price"
                    sx={{ width: "50%", backgroundColor: "white", mb: 1 }} />
                <TextField
                    id="outlined-basic"
                    name="img"
                    onBlur={handleOnBlur}
                    defaultValue="img-url"
                    sx={{ width: "50%", backgroundColor: "white", mb: 1 }} />
                <TextField
                    id="outlined-basic"
                    name="details"
                    onBlur={handleOnBlur}
                    defaultValue="Details"
                    sx={{ width: "50%", backgroundColor: "white", mb: 1 }} />
                <Button type="submit" style={{width:'50%',...buttonDesign2, color:'white'}}>Submit</Button>
            </form>
            {success && <Alert severity="success">Service Added Successfully</Alert>}
        </>
    );
};

export default AddService;