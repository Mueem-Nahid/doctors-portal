import * as React from 'react';
import { Grid } from '@mui/material';
import Calender from '../../Shared/Calender/Calender';
import Appointments from '../Appointments/Appointments';

const DashboardHome = () => {
    const [date, setDate] = React.useState( new Date());

    return (
        <Grid container spacing={2}>
        <Grid sx={{p:2}} item xs={12} md={4}>
            <Calender
                date = {date}
                setDate = {setDate}
            ></Calender>
        </Grid>
        <Grid item sx={{p:2}} xs={12} md={8}>
            <Appointments date={date}></Appointments>
        </Grid>
        </Grid>
    );
};

export default DashboardHome;