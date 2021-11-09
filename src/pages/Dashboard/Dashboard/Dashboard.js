import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddService from '../AddService/AddService';
import { useParams } from 'react-router';
import Booking from '../../Home/Booking/Booking';
import MyServices from '../MyServices/MyServices';
import Review from '../Review/Review';
import useAuth from '../../../Hooks/useAuth';
import AdminRoute from '../../Login/AdminRote/AdminRoute';
import OrderList from '../OrderList/OrderList';

const buttonDesign = {
    color: '#F63E7B',
    padding: '5px 10px',
    textDecoration:'none'
}

const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    


    //for props drilling using this for share service both dashboard and services
    //

    let { path, url } = useRouteMatch();

    //admin non admin
    const { admin } = useAuth();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <Link style={buttonDesign} to='/home'><Button color="inherit">Go to Home</Button></Link>
            <Link style={buttonDesign} to={`${url}/myServices`}><Button color="inherit">My Services</Button></Link>
            <Link style={buttonDesign} to={`${url}/review`}><Button color="inherit">Add Review</Button></Link>
            {admin && <Box>
                <Link style={buttonDesign} to={`${url}/orderList`}><Button color="inherit">Order List</Button></Link>
                <Link style={buttonDesign} to={`${url}/makeAdmin`}><Button color="inherit">Make Admin</Button></Link>
                <Link style={buttonDesign} to={`${url}/addService`}><Button color="inherit">Add Service</Button></Link>
            </Box>}
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                style={{ background: 'transparent' }}
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography style={{color: '#F63E7B'}} variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <Booking
                            // service={service}
                        ></Booking>
                    </Route>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addService`}>
                        <AddService></AddService>
                    </AdminRoute>
                    <AdminRoute path={`${path}/orderList`}>
                        <OrderList></OrderList>
                    </AdminRoute>
                    <Route path={`${path}/myServices`}>
                        <MyServices></MyServices>
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route>
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
