import { Box, Stack, Button } from '@mui/material/';
import "./Landing2.css";
import graduateImage from "./../assets/graduate.jpg"

const LandingOne = () => {

    return (
        <Box 
            class='Landing2'>

            <Stack 
                sx={{
                    alignItems:'center',
                }}
                direction="row">

                <Box class='glass'>
                    <h1>Empowering youths through free education</h1>
                    <p>We're a non-profit organisation with a mission to provide tutoring services and access to learning resources for under-privileged students.</p>
                    <Button>Find tutors</Button>
                    <Button>Volunteer with us</Button>
                </Box>

                <Box m='10px' sx={{width:'50%'}}>
                    
                </Box>

            </Stack>
        </Box>
    )
}

export default LandingOne;