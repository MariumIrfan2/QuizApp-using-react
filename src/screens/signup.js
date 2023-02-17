import { Grid, Box, TextField, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


function SignUp() {

    const navigate = useNavigate()
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const movetoHome = (e) => {
        navigate('home', {
            state: {
                firstName: fName,
                lastName: lName,
                Email: email,
                Password: password


            },
        });
    }
    return (
        <Box className='text-center m-5 p-5'>

            <Box className='text-start'>
                <Button className="p-2 m-3" variant='contained' onClick={() => { navigate("/home") }}>Home</Button>
                <Button className="p-2 m-3" variant='contained' onClick={() => { navigate("/login") }}>Login</Button>
            </Box>
            <Typography variant='h2'>SignUp</Typography>
            <Grid contanier className=''>

                <Grid item md={4} className='p-2 m-3'>
                    <input type='text' placeholder="First Name"
                        value={fName}
                        onChange={(e) => setFName(e.target.value)} />

                </Grid>

                <Grid item md={6} className='p-2 m-3'>
                    <input type='text' placeholder="Last Name"
                        value={lName}
                        onChange={(e) => setLName(e.target.value)} />

                </Grid>

                <Grid item md={6} className='p-2 m-3'>
                    <input type='email' placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </Grid>
                <Grid item md={6} className='p-2 m-3'>

                    <input type='password' placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </Grid>

                <Grid item md={6} className='p-2 m-3'>
                    <input className='btn btn-primary text-center' onClick={(e) => movetoHome()} type='Submit' value='SignUp' />

                </Grid>
            </Grid>
        </Box>
    )
}

export default SignUp;