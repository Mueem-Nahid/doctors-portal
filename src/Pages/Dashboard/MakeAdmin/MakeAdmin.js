import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const {token} = useAuth();

    const [email, setEmail] = useState('');

    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {

        const user = {email};

        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount) {
                setSuccess(true);
            }
            
        })

        e.preventDefault();
    }

    return (
        <div>
            <h2>Make Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField type="email" label="Email" onBlur={handleOnBlur} variant="filled" />
                <Button type="submit" variant="contained">Make admin</Button>
            </form>
            {success && <Alert severity="success">Admin Added</Alert>}
        </div>
    );
};

export default MakeAdmin;