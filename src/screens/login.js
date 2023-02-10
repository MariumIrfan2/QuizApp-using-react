
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from 'react-router-dom';

function Login() {

    const navigation = useNavigate()

    return (
        <>

            <Box className='text-center display-flex justify-content  m-5 p-5'>
                <Box className='text-start'>
                    <Button variant='contained' onClick={()=>{navigation("/home")}}>Home</Button>
                    <Button variant='contained' onClick={()=>{navigation("/signup")}}>SignUp</Button>
                </Box>
                <Typography variant='h2'>LogIn</Typography>
                <Grid contanier>

                    <Grid item md={6} className='p-2 m-3'>
                        <TextField id="outlined-basic" label="Email" variant="outlined" />
                    </Grid>

                    <Grid item md={6} className='p-2 m-3'>
                        <TextField id="outlined-basic" label="Password" variant="outlined" />
                    </Grid>

                    <Grid item md={6} className='p-2 m-3'>
                        <input className='btn btn-primary text-center' type='Submit' value='LogIn' />
                    </Grid>
                </Grid>
            </Box>
        </>


    )
}

export default Login;