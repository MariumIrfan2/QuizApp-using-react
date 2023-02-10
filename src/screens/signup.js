import { Grid, Box, TextField, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


function SignUp() {

    const navigation = useNavigate()
    return (
        <Box className='text-center m-5 p-5'>

            <Box className='text-start'>
                <Button className="p-2 m-3" variant='contained' onClick={() => { navigation("/home") }}>Home</Button>
                <Button className="p-2 m-3" variant='contained' onClick={() => { navigation("/login") }}>Login</Button>
            </Box>
            <Typography variant='h2'>SignUp</Typography>
            <Grid contanier className=''>

                <Grid item md={4} className='p-2 m-3'>
                    <TextField id="outlined-basic" label="First Name" variant="outlined" />
                </Grid>

                <Grid item md={6} className='p-2 m-3'>
                    <TextField id="outlined-basic" label="last Name" variant="outlined" />
                </Grid>

                <Grid item md={6} className='p-2 m-3'>
                    <TextField id="outlined-basic" label="Email" variant="outlined" />
                </Grid>
                <Grid item md={6} className='p-2 m-3'>

                    <TextField id="outlined-basic" label="Password" variant="outlined" />

                </Grid>
                <Grid item md={6} className='p-2 m-3'>
                    <input className='btn btn-primary text-center' type='Submit' value='SignUp' />

                </Grid>
            </Grid>
        </Box>
    )
}

export default SignUp;