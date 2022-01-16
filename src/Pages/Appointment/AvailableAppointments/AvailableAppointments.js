import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';

const bookings = [
    {
        id:1,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        space: 10,
    },
    {
        id:2,
        name: 'Cosmetic Dentistry',
        time: '09.00 AM - 10.00 AM',
        space: 8,
    },
    {
        id:3,
        name: 'Teeth Cleaning',
        time: '10.00 AM - 11.00 AM',
        space: 9,
    },
    {
        id:4,
        name: 'Cavity Protection',
        time: '12.00 PM - 01.00 PM',
        space: 5,
    },
    {
        id:5,
        name: 'Pediatric Dental',
        time: '06.00 PM - 07.00 PM',
        space: 10,
    },
    {
        id:6,
        name: 'Oral Surgery',
        time: '07.00 PM - 08.00 PM',
        space: 10,
    }
];

const AvailableAppointments = ({date}) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);

    return (
        <Container>
            <Typography sx={{ color: 'info.main', fontSize:30, fontWeight: 500, mt:5, mb:3}} variant="h4">
                Available appointments on {date.toDateString()}
            </Typography>

            {
                bookingSuccess && <Alert severity="success">Appointment booking successfull</Alert>
            }

            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                    key={booking.id} 
                    booking={booking} 
                    date={date}
                    setBookingSuccess={setBookingSuccess}
                    ></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointments;