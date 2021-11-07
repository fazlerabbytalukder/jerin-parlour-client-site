import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <>
            <Typography style={{ fontWeight: '700', size: '35px', margin: '25px 0' }} variant="h4" gutterBottom component="div">
                Our Awesome <span style={{ color: '#F63E7B' }}>Services</span>
            </Typography>
            <Container>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </>
    );
};

export default Services;