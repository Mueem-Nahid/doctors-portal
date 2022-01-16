import React, { useState } from 'react';
import { Container, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import { Link, useHistory } from 'react-router-dom';
import login from '../../../images/login.png';
import useAuth from '../../../hooks/useAuth';

const Register = () => {

    const [loginData, setLoginData] = useState({});

    const history = useHistory();

    const {user, registerUser, isLoading, authError} = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        //console.log(field, value);
        const newLoginData = {...loginData}; //setting previous loggedin data into newLoginData
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        if(loginData.password !== loginData.password2) 
        {
            alert('Passwords are not same');
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{mt:10}} item xs={12} md={6}>
                <Typography variant="body1" gutterBottom>
                    Register
                </Typography>
                { !isLoading && <form onSubmit={handleLoginSubmit}>
                    <TextField onBlur={handleOnBlur} type="text" name="name" sx={{width: '75%', m:1}} label="User Name" variant="standard" />
                    <TextField onBlur={handleOnBlur} type="email" name="email" sx={{width: '75%', m:1}} label="Email" variant="standard" />
                    <TextField  onBlur={handleOnBlur} name="password" sx={{width: '75%', m:1}} type="password" label="Password" variant="standard" />
                    <TextField  onBlur={handleOnBlur} name="password2" sx={{width: '75%', m:1}} type="password" label="Confirm Password" variant="standard" />
                    <Button sx={{width: '75%', mt:3}} type="submit" variant="contained">Register</Button>
                </form>}
                {
                    isLoading && <CircularProgress />
                }
                {
                    user?.email && <Alert severity="success">Registration successfull. Please go to Login page and login</Alert>
                }
                {
                    authError && <Alert severity="error">{authError}</Alert>
                }
                <Link to="/login" style={{textDecoration: 'none'}}>
                    <Button variant="text" sx={{m:2, textTransform: 'capitalize'}}>Already registered? Click here to Login</Button>
                </Link>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={login} style={{width:'100%'}} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;