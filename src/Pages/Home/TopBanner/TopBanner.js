import React from 'react';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Typography, Container } from '@mui/material';
import Box from '@mui/material/Box';


const bannerBg = {
    background: `url(${bg})`,
}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}

const TopBanner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item style={{...verticalCenter, textAlign: 'left'}} xs={12} md={5}>
                    <Box>
                        <Typography variant="h3">
                            Your New Smile <br/>
                            Starts Here
                        </Typography>
                        <Typography variant="h6" sx={{fontSize: 14, color: 'grey', fontWeight:300, my:4}}>
                            Lorem ipsum dolor sit consectetur elit.
                        </Typography>
                        <Button variant="contained" sx={{ backgroundColor: '#10D7E1'}}>Get Appointment</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={7} style={verticalCenter}>
                    <img style={{width: '400px'}} src={chair} alt=""></img>
                </Grid>
            </Grid>
        </Container>
    );
};

export default TopBanner;