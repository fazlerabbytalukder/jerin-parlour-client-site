import { Alert, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const buttonDesign2 = {
    backgroundColor: '#F63E7B',
    padding: '5px 10px',
    borderRadius:'3px'
}

const Review = () => {
    const [review, setReview] = useState({})
    const [success, setSuccess] = useState(false);
    const { user } = useAuth();
    console.log(user);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field,value);

        const newReviewData = { ...review };
        newReviewData[field] = value;

        // console.log(newLoginData);
        setReview(newReviewData);
    }

    const handleReiewSubmit = e => {
        const reviewInfo = {
            ...review,
            img:user.photoURL
        }

        //send data to the serer
        fetch('https://warm-caverns-33729.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(reviewInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess(true);
                }
            })
        
        e.preventDefault();
    }


    return (
        <>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 900, textAlign:'left' }}>Review</Typography>
            <form onSubmit={handleReiewSubmit} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'left' }}>
                <TextField
                    id="outlined-basic"
                    defaultValue="your Name"
                    onBlur={handleOnBlur}
                    name="name"
                    sx={{ width: "50%", backgroundColor: "white", mb: 1 }} />
                <TextField
                    id="outlined-basic"
                    name="country"
                    onBlur={handleOnBlur}
                    defaultValue="country"
                    sx={{ width: "50%", backgroundColor: "white", mb: 1 }} />
                <TextField
                    id="outlined-basic"
                    name="description"
                    onBlur={handleOnBlur}
                    defaultValue="Description"
                    sx={{ width: "50%", backgroundColor: "white", mb: 1 }} />
                
                {success && <Alert severity="success">Service Added Successfully</Alert>}
                <Button type="submit" style={{width:'50%',...buttonDesign2, color:'white'}}>Submit</Button>
            </form>
        </>
    );
};

export default Review;