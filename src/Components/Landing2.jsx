import { Box, Stack, Button, Divider } from '@mui/material/';
import "./Landing2.css";

const LandingOne = () => {

    return (
        <Box
            class='Landing2'>

            <Stack
                direction="row">

                <Box class='glass' sx={{ padding: 5 }}>
                    <h1>EMPOWERING YOUTHS THROUGH <br /> FREE EDUCATION</h1>
                    <p>We're a non-profit organisation with a mission to provide tutoring services and access to learning resources for under-privileged students.</p>
                    <Box className="buttonsInnerDiv">
                        <Box elevation={12} className="buttonPaperStyle variant1" sx={{ mr: "1vw"}}>
                            <span className="iconTextStyle">Find Tutors</span>
                        </Box>

                        <Box elevation={12} className="buttonPaperStyle variant2" sx={{ marginLeft: "1vw" }}>
                            <span className="iconTextStyle2">Volunteer With Us</span>
                        </Box>
                    </Box>
                </Box>

                <Box m='10px' sx={{ width: '50%' }}>

                </Box>

            </Stack>
        </Box>
    )
}

export default LandingOne;