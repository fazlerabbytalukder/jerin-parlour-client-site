import {Grid} from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import MySingleService from '../MySingleService/MySingleService';

const MyServices = () => {
    const { user } = useAuth();
    const [myService, setMyService] = useState([]);

    useEffect(() => {
        const url = `https://warm-caverns-33729.herokuapp.com/booking?email=${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMyService(data));
    }, [])
    return (
        <div>
            <h2>my Service: {myService.length}</h2>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        myService.map(mySingleService => <MySingleService
                            mySingleService={mySingleService}
                        ></MySingleService>)
                    }
                </Grid>
        </div>
    );
};

export default MyServices;