import { Button, Container, TextField, Typography, TextareaAutosize } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const buttonDesign = {
    backgroundColor: '#F63E7B',
    padding: '5px 10px',
    borderRadius: '3px',
    color: 'white'
}

const ContactUs = () => {
    return (
        <Box style={{ backgroundColor: "#FFF8F5" }} sx={{ py: 5, px: 5, mt: 5 }}>
            <Container sx={{ width: "50%" }}>
                <Typography variant="h5" sx={{ mb: 5, fontWeight: 900 }}>Let us handle your <br /> project <span style={{color:'#F63E7B'}}>professionally</span> </Typography>
                <form>
                    <Box style={{ display: "flex", justifyContent: "space-around", gap: 5 }} sx={{ my: 1 }}>
                        <TextField
                            id="outlined-basic"
                            label="Fast Name"
                            variant="outlined"
                            sx={{ width: "50%", backgroundColor: "white" }} />

                        <TextField
                            id="outlined-basic"
                            label="Last Name"
                            variant="outlined"
                            sx={{ width: "50%", backgroundColor: "white" }} />
                    </Box>

                    <Box style={{ display: "flex", justifyContent: "space-around", gap: 5 }}>
                        <TextField
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            sx={{ width: "50%", backgroundColor: "white" }} />

                        <TextField
                            id="outlined-basic"
                            label="Password"
                            variant="outlined"
                            sx={{ width: "50%", backgroundColor: "white" }} />
                    </Box>


                    <TextareaAutosize
                        aria-label="minimum height"
                        minRows={10}
                        placeholder="Your message"
                        style={{ width: "100%", marginTop: 10 }}
                        sx={{ mx: 3, my: 4 }} />
                    <Button type="contained" style={{...buttonDesign}} sx={{ mt: 2 }}>Send Message</Button>
                </form>
            </Container>
        </Box>
    );
};

export default ContactUs;