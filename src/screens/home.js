import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Home(){
const navigation = useNavigate()

    return(
      
        <Box className='text-start'>
              <h1>Home Screen</h1>
        <Button className="p-2 m-3" variant='contained' onClick={() => { navigation("/signup") }}>Signup</Button>
        <Button className="p-2 m-3" variant='contained' onClick={() => { navigation("/login") }}>Login</Button>
    </Box>
    )
}

export default Home;