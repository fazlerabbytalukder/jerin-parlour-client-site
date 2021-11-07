import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import bannerimg from '../../../Image_Icon/Image/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png';
import { Button, Container } from '@mui/material';
import Navigation from '../../Shared/Navigation/Navigation';
import { textAlign } from '@mui/system';

const bannerBg = {
    backgroundColor: '#FFF8F5'
}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center'
}

const buttonDesign = {
    backgroundColor: '#F63E7B',
    padding: '5px 10px',
    borderRadius: '3px',
    color: 'white'
}

const Banner = () => {
    return (
        <>
            <Box style={bannerBg}>
                <Navigation></Navigation>
                <Container sx={{ flexGrow: 1, py: 5 }}>
                    <Grid style={{ ...verticalCenter }} container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Typography style={{ textAlign: 'left', fontWeight: '600', size: '35px' }} variant="h3" gutterBottom component="div">
                                BEAUTY SALON <br />FOR EVERY WOMEN
                            </Typography>
                            <Typography style={{ textAlign: 'left', fontWeight: '400', size: '16px', color: '#666666', margin:'30px 0' }} variant="body2" gutterBottom>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                                neque doloribus
                            </Typography>
                            <Typography style={{ textAlign: 'left' }}>
                                <Button style={{ ...buttonDesign }} color="inherit">Get An Appointment</Button>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <img style={{ width: '400px' }} src={bannerimg} alt="" />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default Banner;