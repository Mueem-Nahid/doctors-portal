import { Container, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import React, { useState } from 'react';
import login from '../../../images/login.png';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {

    const [loginData, setLoginData] = useState({});

    const {user, loginUser, isLoading, authError, signInWithGoogle} = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        //console.log(field, value);
        const newLoginData = {...loginData}; //setting previous loggedin data into newLoginData
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{mt:10, px:5}} item xs={12} md={6}>
                <Typography variant="body1" gutterBottom>
                    Login
                </Typography>
                <form onSubmit={handleLoginSubmit}>
                    <TextField onChange={handleOnChange} type="email" name="email" sx={{width: '100%', m:1}} label="Email" variant="standard" />
                    <TextField  onChange={handleOnChange} name="password" sx={{width: '100%', m:1}} type="password" label="Password" variant="standard" />
                    {
                        authError && <Alert severity="error">{authError}</Alert>
                    }
                    <Button sx={{width: '100%', mt:3}} type="submit" variant="contained">Login</Button>
                </form>
                <hr style={{marginTop: 25}}/>
                <Button onClick={handleGoogleSignIn} variant="contained" sx={{textTransform: 'capitalize', mt:1}}>SignIn with Google</Button>
                <br/>
                <Link to="/register" style={{textDecoration: 'none'}}>
                    <Button variant="text" sx={{m:2, textTransform: 'capitalize'}}>New User? Click here to register</Button>
                </Link>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={login} style={{width:'100%',}} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;