import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import appointment from '../../../images/appointment-bg.png';
import { Button, Typography } from '@mui/material';

const appointmentBanner = {
    background: `url(${appointment})`,
    marginTop: 150,
    backgroundColor: 'rgba(37, 76, 97 )',
    backgroundBlendMode: 'overlay',
    backgroundPosition: 'center top'
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} sx={{textAlign: 'left'}}>
                <Grid item xs={12} md={6}>
                    <img style={ { width: 500, marginTop: '-120px', } } src={doctor} alt="doctor" />
                </Grid>
                <Grid item xs={12} md={6} sx={{display: 'flex', alignItems: 'center' }}>
                    <Box >
                        <Typography variant="h6" sx={{ color: '#10D7E1', my:2 }}>
                            Appointment
                        </Typography>
                        <Typography sx={{my:2}} variant="h4" style={{color: 'white', fontWeight: '600'}}>
                            Make an Appointment Today
                        </Typography>
                        <Typography sx={{my:2}} variant="h6" style={{color: 'white', fontSize: 16, fontWeight: 300}}>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its 
                        </Typography>
                        <Button variant="contained" sx={{ backgroundColor: '#10D7E1'}}>Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;