import { Grid } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({booking, date, setBookingSuccess}) => {
    const {name, time, space} = booking;

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={0} sx={{ py:4 }}>
                    <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant="h5" component="div" gutterBottom>
                        {name}
                    </Typography>
                    <Typography variant="h6" component="div" gutterBottom>
                        {time}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        {space} Spaces Available
                    </Typography>
                    <Button onClick={handleOpen} variant="contained">Book Appointment</Button>
                </Paper>  
            </Grid>
            <BookingModal 
                date={date} 
                booking={booking} 
                open={open} 
                setBookingSuccess={setBookingSuccess}
                handleClose={handleClose}>
            </BookingModal>
        </>
    );
};

export default Booking;