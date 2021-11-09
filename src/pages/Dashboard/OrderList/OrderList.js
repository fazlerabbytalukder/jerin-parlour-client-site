import { Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';

const OrderList = () => {
    const [bookingData, setBookingData] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/booking')
            .then(res => res.json())
            .then(data => setBookingData(data));
    }, [])
    

    //update data pending to approved
    const handleUpdate = (id) => {
        const url = `http://localhost:5000/booking/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('updated successfull');
                    window.location.reload();
            }
        })
    }

    return (
        <div>
            <h2>Order List</h2>
            <Container>
            <TableContainer component={Paper}>
                <Table aria-label="Appointments table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">email</TableCell>
                            <TableCell align="center">Service</TableCell>
                            <TableCell align="center">status</TableCell>
                            <TableCell align="center">approval</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {bookingData.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="center">{row.yourName}</TableCell>
                                <TableCell align="center">{row.email}</TableCell>
                                <TableCell align="center">{row.serviceName}</TableCell>
                                <TableCell align="center">{row.status}</TableCell>
                                <TableCell align="center"><Button onClick={() => handleUpdate(row._id)} variant='contained'>approve</Button></TableCell>
                                <TableCell align="center"><Button variant='contained'>Delete</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </Container>
        </div>
    );
};

export default OrderList;