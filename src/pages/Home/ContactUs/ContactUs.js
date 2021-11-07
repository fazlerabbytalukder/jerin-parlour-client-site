import { Button, Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const contactBackground = {
    backgroundColor: '#FFF8F5',
    paddingTop: '20px',
    paddingBottom: '20px',
    marginTop: '50px'
}

const buttonDesign = {
    backgroundColor: '#F63E7B',
    padding: '5px 10px',
    borderRadius: '3px',
    color: 'white'
}

const ContactUs = () => {
    return (
        <Container style={contactBackground}>
            <Box>
                <Box sx={{ my: 5 }}>
                    <Typography variant='h6' sx={{ fontSize: 15, color: '#F63E7B', fontWeight: 500 }}>
                        CONTACT US
                    </Typography>
                    <Typography variant='h4' sx={{ fontWeight: 600, color: 'black' }}>
                        Let us handle your <br />
                        project, professionally.
                    </Typography>
                </Box>
                <form>
                    <TextField
                        required
                        style={{ margin: '5px', backgroundColor: 'white', border: 'none' }}
                        id="outlined-required"
                        placeholder="First Name"
                    />
                    <TextField
                        required
                        style={{ margin: '5px', backgroundColor: 'white', border: 'none' }}
                        id="outlined-required"
                        placeholder="Last Name"
                    />
                    <br />
                    <TextField
                        required
                        style={{ margin: '5px', backgroundColor: 'white', border: 'none' }}
                        id="outlined-required"
                        placeholder="Email"
                    />
                    <TextField
                        required
                        style={{ margin: '5px', backgroundColor: 'white', border: 'none' }}
                        id="outlined-required"
                        placeholder="Phone No."
                    />
                    <br />
                    <TextField
                        style={{ margin: '5px', width: '45%', backgroundColor: 'white', border: 'none' }}
                        id="outlined-multiline-static"
                        multiline
                        rows={4}
                        placeholder="Your Message"
                    />
                    <br />
                    <Button style={{ ...buttonDesign, marginTop: '10px' }} type="submit" variant="contained">Submit</Button>
                </form>

            </Box>
        </Container>
    );
};

export default ContactUs;