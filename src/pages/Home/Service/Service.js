import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const Service = (props) => {
    const { servicename,price, details, img } = props.service;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 2 }}>
                <CardMedia
                    component="img"
                    style={{width:'auto', height:'80px', margin:'0 auto', marginTop:'10px'}}
                    image={img}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="h5" component="div">
                        {servicename}
                    </Typography>
                    <Typography style={{color:'#F63E7B'}} variant="h6" color="text.secondary">
                        ${price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {details}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Service;