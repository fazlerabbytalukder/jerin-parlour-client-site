import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <Container>
            <Box>
            <Typography style={{ fontWeight: '700', size: '35px', margin: '25px 0',color: '#F63E7B' }} variant="h4" gutterBottom component="div">
                Testimonial
            </Typography>
            </Box>
            <Box sx={{ flexGrow: 1, mb: 4 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        reviews.map(review => <Testimonial
                            key={review._id}
                            review={review}
                        ></Testimonial>)
                    }
                </Grid>
            </Box>
        </Container>
    );
};

export default Testimonials;