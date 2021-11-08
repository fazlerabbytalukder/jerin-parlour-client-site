import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../Image_Icon/Group 33092.png';
import { Container } from '@mui/material';

const buttonDesign = {
    backgroundColor: '#F63E7B',
    padding: '0 10px',
    borderRadius:'3px'
}
const buttonDesign2 = {
    backgroundColor: '#F63E7B',
    padding: '5px 10px',
    borderRadius:'3px'
}
const buttonDesign3 = {
    border:'1px solid #F63E7B',
    padding: '5px 10px',
    borderRadius:'3px'
}
const buttonDesign4 = {
    color: 'black',
    textDecoration:'none'
}

const Navigation = () => {
    const { user, logout } = useAuth();
    console.log(user);
    return (
        <Container sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none' }}>
                <Toolbar>
                    <img style={{ width: '100px' }} src={logo} alt="" />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    </Typography>
                    <Link style={{...buttonDesign4}} to='/services'><Button color="inherit">Services</Button></Link>
                    {
                        user?.email ?
                            <>
                                <Button style={{ color: '#F63E7B', marginRight: '7px', ...buttonDesign3 }}>{user?.displayName}</Button>
                                <Button style={{...buttonDesign2}} onClick={logout} color="inherit">Logout</Button>
                            </>
                            :
                            <NavLink style={{ textDecoration: "none", color: 'white',...buttonDesign }} to='/login'><Button color="inherit">Login</Button></NavLink>
                    }
                </Toolbar>
            </AppBar>
        </Container>
    );
};

export default Navigation;