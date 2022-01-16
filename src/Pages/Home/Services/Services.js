import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import Service from './Service/Service';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';

const services = [
    {
        name: 'Fluoride Treatment',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates veritatis nulla aperiam repudiandae a ea quam iure, ipsa repellat laboriosam.',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates veritatis nulla aperiam repudiandae a ea quam iure, ipsa repellat laboriosam.',
        img: cavity
    },
    {
        name: 'Whitening Treatment',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates veritatis nulla aperiam repudiandae a ea quam iure, ipsa repellat laboriosam.',
        img: whitening
    }
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ color: 'info.main', m:2 }} variant="h6" component="div">
                    Our services
                </Typography>
                <Typography sx={{ fontWeight: 500, mb:3 }} variant="h4" component="div">
                    Services we provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {services.map(service => <Service
                    key={service.name} service={service}></Service>)}
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;