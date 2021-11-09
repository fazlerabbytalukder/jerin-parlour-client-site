import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const MySingleService = (props) => {
    const { serviceName,img,description,status } = props.mySingleService;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 200, height: '230px', border: 0, boxShadow: 2 }}>
                <CardMedia
                    component="img"
                    style={{ width: 'auto', height: '50px', margin: '0 auto', marginTop: '10px' }}
                    image={img}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="h6" component="div">
                        {serviceName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Status: {status}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default MySingleService;