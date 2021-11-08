import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const verticalAlign = {
    display: 'flex',
    alignItems: 'center',
    justifyContent:'center'
}

const Testimonial = (props) => {
    const { name, description, country, img } = props.review;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275,height:'260px', border: 0, boxShadow: 2 }}>
                <CardContent>
                    <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'justify' }}>
                        {description}
                    </Typography>
                </CardContent>
                <Box style={{...verticalAlign,textAlign: 'left', marginTop:'25px', marginBottom:'25px'}}>
                    <CardMedia
                        component="img"
                        style={{ width: '50px' }}
                        image={img}
                        alt="your img"
                    />
                    <Box sx={{ml:2}}>
                        <Typography variant="body2" sx={{fontSize: 17, color: '#F63E7B',fontWeight: 500}} >
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {country}
                        </Typography>
                    </Box>
                </Box>
            </Card>
        </Grid>
    );
};

export default Testimonial;