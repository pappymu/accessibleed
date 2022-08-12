import { Box, Stack, Button, Divider } from '@mui/material/';
import "./Landing2.css";
import graduateImage from "./../assets/graduate.jpg"

const LandingOne = () => {

    return (
        <Box
            class='Landing2'>

            <Stack
                sx={{
                    alignItems: 'center',
                }}
                direction="row">

                <Box className='glass' sx={{ padding: 5 }}>
                    <h1>Empowering youths through free education</h1>
                    <p>We're a non-profit organisation with a mission to provide tutoring services and access to learning resources for under-privileged students.</p>
                    <Box className="buttonsInnerDiv">
                        <Box elevation={12} className="buttonPaperStyle variant1" sx={{ mr: "2vw"}}>
                            <span className="iconStyle">👨‍🎓</span>
                            <span className="iconTextStyle">Find Tutors</span>
                        </Box>

                        <Divider orientation="vertical" style={{ borderRightWidth: "5px", height: "auto" }} />

                        <Box elevation={12} className="buttonPaperStyle variant2" sx={{ marginLeft: "2vw" }}>
                            <span className="iconStyle">👩‍🏫</span>
                            <span className="iconTextStyle">Volunteer With Us</span>
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