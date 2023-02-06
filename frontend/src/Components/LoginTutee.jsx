import { Box, TextField, Divider, Select, MenuItem, Button, ListSubheader, Stack, Fade } from '@mui/material/';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useForm, Controller } from "react-hook-form";
import { Fragment, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './LoginTutee.css'

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});
const subjects = ["English", "Chinese", "Malay", "Tamil", "Biology", "Physics"]
let subjectComponents = []
const level = { Primary: [1, 2, 3, 4, 5, 6], Secondary: [1, 2, 3, 4, 5], Polytechnic: [1, 2, 3], "Junior College": [1, 2, 3], ITE: [1, 2, 3] }
let levelComponents = []

const generateLevels = () => {
    if (levelComponents.length === 0) {
        for (const sector in level) {
            levelComponents.push(<ListSubheader key={sector}>{sector}</ListSubheader>)
            for (let i = 0; i < level[sector].length; i++) {
                const number = level[sector][i]
                levelComponents.push(<MenuItem key={sector + number} value={sector + number}>Year {number}, {sector}</MenuItem>)
            }
        }
    }
}
const generateSubjects = () => {
    if (subjectComponents.length === 0) {
        for (let i = 0; i < subjects.length; i++) {
            subjectComponents.push(<MenuItem key={subjects[i]} value={subjects[i]}>{subjects[i]}</MenuItem>)
        }
    }


}

const Register = (props) => {

    useEffect(() => {
        generateLevels()
        generateSubjects()
    }, [])

    const { handleSubmit, control, getValues, trigger, errors } = useForm();
    const onSubmit = data => console.log(data);
    const navigate = useNavigate()


    return (
        <Fade in={true}>
            <Box className="main">
                <Box direction='row' className='registerGlass'>
                    <ThemeProvider theme={darkTheme}>
                        <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                            <Button variant="contained" startIcon={<KeyboardArrowLeftIcon />} onClick={() => { navigate('/') }}>Home</Button>
                            {/* <Stack sx={{ maxWidth: "20ch" }}>
                                <Button variant="contained" sx={{ mb: "5px" }} endIcon={<KeyboardArrowRightIcon />} onClick={() => {
                                    navigate('/register/tutor')
                                }}>Tutor Signup</Button>
                                <span style={{ fontSize: "small" }}>Looking to tutor instead?</span>
                            </Stack> */}

                        </Stack>

                        <Divider sx={{ mt: "1ch" }} />
                        <h1>Login</h1>
                        <span>Login & find you a suitable tutor 😊!</span>

                        <Divider textAlign="left" style={{ borderBottomWidth: "3px", marginTop: "2vh", marginBottom: "1ch" }}></Divider>

                        <form onSubmit={handleSubmit(onSubmit)} className='formStyles'>
                            <Controller
                                name="username"
                                control={control}
                                rules={{ required: "Please enter a username", pattern: /^[A-Za-z]{3,20}$/i }}
                                render={({
                                    field,
                                    fieldState: { isTouched, isDirty, error },
                                    formState,
                                }) => {
                                    let errMsg = ""
                                    if (error !== undefined) {

                                        if (error.type === "required") errMsg = error.message
                                        else errMsg = "Please enter an alphanumeric username between 3-20 chars"
                                    }


                                    return (
                                        <TextField {...field} onChange={(value) => { field.onChange(value); trigger('username') }} error={error !== undefined} helperText={errMsg} className="formItemStyle" variant='filled' label="User Email" required />
                                    )
                                }
                                }
                            />
                            <Controller
                                name="password"
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => <TextField className="formItemStyle" variant='filled' type="password" label="Password" required {...field} />}
                            />
                            <Button type="submit" variant='contained' sx={{ mt: "3vh" }}>Login!</Button>
                        </form>
                    </ThemeProvider>

                </Box>
            </Box>
        </Fade>
    )
}

export default Register; 