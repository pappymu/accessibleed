import { Box, Divider, MenuItem, Button, ListSubheader, Stack, Fade } from '@mui/material/';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';;
import { Fragment, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './RegisterChoice.css'


const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const RegisterChoice = (props) => {

    const navigate = useNavigate()

    return (
        <Fade in={true}>
            <Box className="main">
                <Box direction='row' className='registerChoiceGlass'>
                    <ThemeProvider theme={darkTheme}>
                        <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                            <Button variant="contained" startIcon={<KeyboardArrowLeftIcon />} onClick={() => { navigate('/') }}>Home</Button>
                        </Stack>

                        <Divider sx={{ mt: "1ch" }} />

                        <Box className="buttonsInnerDivChoice" sx={{ flexDirection: {xs: 'column', md: 'row'}, justifyContent: 'center', alignItems: 'center'}}>
                            <Box elevation={12} className="registerButtonPaperStyle variant1" sx={{ mr: "1vw"  }} onClick={() => { navigate('/register/tutee') }}>
                                <div className='iconStyle'>👩‍🎓</div>
                                <div className="iconTextStyle choiceEdits">Find Tutors</div>
                                <span>Find a tutor automatically in minutes according to your preferences and requirements!</span>
                            </Box>

                            <Box elevation={12} className="registerButtonPaperStyle variant2" sx={{ ml: {xs: 0, md: '1vw'}, mt: {xs: '5vh', md: 0} }} onClick={() => { navigate("/register/tutor") }}>
                                <div className='iconStyle'>👩‍🏫</div>
                                <div className="iconTextStyle2 choiceEdits">Volunteer With Us</div>
                                <span>Get matched with needy tutees in seconds and help us in providing free education for everyone</span>
                            </Box>
                        </Box>

                    </ThemeProvider>

                </Box>
            </Box>
        </Fade>
    )
}

export default RegisterChoice; 