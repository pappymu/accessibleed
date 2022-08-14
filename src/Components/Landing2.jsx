import { Box, Stack, Fade } from '@mui/material/';
import { useNavigate } from "react-router-dom";
import "./Landing2.css";

const LandingOne = (props) => {

    const navigate = useNavigate();

    return (
        <Fade in={true}>
            <Box
                className='Landing2'>

                <Stack
                    direction="row">

                    <Box className='glass' sx={{ padding: 5 }}>
                        <h1>EMPOWERING YOUTHS THROUGH <br /> FREE EDUCATION</h1>
                        <p>We're a non-profit organisation with a mission to provide tutoring services and access to learning resources for under-privileged students.</p>
                        <Box className="buttonsInnerDiv">
                            <Box elevation={12} className="buttonPaperStyle variant1" sx={{ mr: "1vw" }} onClick={() => { navigate('/register/tutee') }}>
                                <span className="iconTextStyle">Find Tutors</span>
                            </Box>

                            <Box elevation={12} className="buttonPaperStyle variant2" sx={{ marginLeft: "1vw" }} onClick={() => { navigate("/register/tutor") }}>
                                <div className="iconTextStyle2">Volunteer With Us</div>
                            </Box>
                        </Box>
                    </Box>

                    <Box m='10px' sx={{ width: '50%' }}>

                    </Box>

                </Stack>
            </Box>
        </Fade>
    )
}

export default LandingOne;