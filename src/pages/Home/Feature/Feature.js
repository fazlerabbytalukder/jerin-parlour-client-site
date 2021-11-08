import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import featureImg from '../../../Image_Icon/Image/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png';

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
}
const verticalleft = {
    display: 'flex',
    alignItems: 'left',
}

const featureBg = {
    backgroundColor: '#FFF8F5',
    paddingTop:"50px",
    paddingBottom: "50px",
    marginTop:"50px"
}

const Feature = () => {
    return (
        <Box style={featureBg}>
            <Container sx={{ flexGrow: 1 }}>
            <Grid style={{...verticalCenter}} container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '350px' }} src={featureImg} alt="" />
                </Grid>
                <Grid  item xs={12} md={6}>
                    <Box>
                    <Typography variant='h4' sx={{textAlign:'left', fontWeight: 400}}>
                    Let us handle your<br /> screen <span style={{color: '#F63E7B'}}>Professionally.</span>
                    </Typography>
                    <Typography variant='h6' sx={{ my: 1, fontSize: 15, color: 'gray', fontWeight: 300,textAlign:'left', marginRight:'150px' }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil omnis corrupti est velit cupiditate officia impedit autem soluta quam tempore?Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        </Typography>
                        <Button  variant="contained" style={{ backgroundColor: '#F63E7B',...verticalleft }}>Get Our Services</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
        </Box>
    );
};

export default Feature;