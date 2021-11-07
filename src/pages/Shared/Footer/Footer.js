import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const footerBackground = {
    backgroundColor: '#F63E7B',
    paddingTop:'20px',
    paddingBottom: '20px',
}

const Footer = () => {
    return (
        <div>
            <Box style={footerBackground}>
            <Container sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3}>
                        <Typography variant='h6' sx={{ my: 2, fontSize: 14, color: 'white', fontWeight: 300, textAlign: 'left', paddingTop: 5 }}>
                            Skinn Care
                        </Typography>
                        <Typography variant='h6' sx={{ my: 2, fontSize: 14, color: 'white', fontWeight: 300, textAlign: 'left' }}>
                            Check Up skin
                        </Typography>
                        <Typography variant='h6' sx={{ my: 2, fontSize: 14, color: 'white', fontWeight: 300, textAlign: 'left' }}>
                            Treatment of personal skin
                        </Typography>
                        <Typography variant='h6' sx={{ my: 2, fontSize: 14, color: 'white', fontWeight: 300, textAlign: 'left' }}>
                            Skin Examination
                        </Typography>
                        <Typography variant='h6' sx={{ my: 2, fontSize: 14, color: 'white', fontWeight: 300, textAlign: 'left' }}>
                            Check Up
                        </Typography>
                    </Grid>



                    <Grid item xs={12} md={3}>
                        <Typography variant='h5' sx={{ my: 2, fontSize: 20, fontWeight: 500, textAlign: 'left', color: 'white' }}>
                            Services
                        </Typography>
                        <Typography variant='h6' sx={{ my: 2, fontSize: 14, color: 'white', fontWeight: 300, textAlign: 'left' }}>
                            Skinn Care
                        </Typography>
                        <Typography variant='h6' sx={{ my: 2, fontSize: 14, color: 'white', fontWeight: 300, textAlign: 'left' }}>
                            Check Up skin
                        </Typography>
                        <Typography variant='h6' sx={{ my: 2, fontSize: 14, color: 'white', fontWeight: 300, textAlign: 'left' }}>
                            Treatment of personal skin
                        </Typography>
                        <Typography variant='h6' sx={{ my: 2, fontSize: 14, color: 'white', fontWeight: 300, textAlign: 'left' }}>
                            Skin Examination
                        </Typography>
                        <Typography variant='h6' sx={{ my: 2, fontSize: 14, color: 'white', fontWeight: 300, textAlign: 'left' }}>
                            Check Up
                        </Typography>
                        <Typography variant='h6' sx={{ my: 2, fontSize: 14, color: 'white', fontWeight: 300, textAlign: 'left' }}>
                            Check Up
                        </Typography>
                        <Typography variant='h6' sx={{ my: 2, fontSize: 14, color: 'white', fontWeight: 300, textAlign: 'left' }}>
                            Check Up
                        </Typography>
                    </Grid>



                    <Grid item xs={12} md={3}>
                        <Typography variant='h5' sx={{ my: 2, fontSize: 20, fontWeight: 500, textAlign: 'left', color: 'white' }}>
                            Oral Health
                        </Typography>
                        <Typography variant='h6' sx={{ my: 2, fontSize: 14, color: 'white', fontWeight: 300, textAlign: 'left' }}>
                            Skinn Care
                        </Typography>
                        <Typography variant='h6' sx={{ my: 2, fontSize: 14, color: 'white', fontWeight: 300, textAlign: 'left' }}>
                            Check Up skin
                        </Typography>
                        <Typography variant='h6' sx={{ my: 2, fontSize: 14, color: 'white', fontWeight: 300, textAlign: 'left' }}>
                            Treatment of personal skin
                        </Typography>
                        <Typography variant='h6' sx={{ my: 2, fontSize: 14, color: 'white', fontWeight: 300, textAlign: 'left' }}>
                            Skin Examination
                        </Typography>
                        <Typography variant='h6' sx={{ my: 2, fontSize: 14, color: 'white', fontWeight: 300, textAlign: 'left' }}>
                            Check Up
                        </Typography>
                        <Typography variant='h6' sx={{ my: 2, fontSize: 14, color: 'white', fontWeight: 300, textAlign: 'left' }}>
                            Check Up
                        </Typography>
                        <Typography variant='h6' sx={{ my: 2, fontSize: 14, color: 'white', fontWeight: 300, textAlign: 'left' }}>
                            Check Up
                        </Typography>
                    </Grid>



                    <Grid item xs={12} md={3}>
                        <Typography variant='h5' sx={{ my: 2, fontSize: 20, fontWeight: 500, textAlign: 'left', color: 'white' }}>
                            Our Address
                        </Typography>
                        <Typography variant='h6' sx={{ my: 2, fontSize: 14, color: 'white', fontWeight: 300, textAlign: 'left' }}>
                            New York - 101010110 Hudson yards
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
        </div>
    );
};

export default Footer;