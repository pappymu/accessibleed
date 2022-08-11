import { Button, Paper, Divider } from '@mui/material/';
import { useSnackbar } from 'notistack';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { yellow, red } from '@mui/material/colors';
import SchoolIcon from '@mui/icons-material/School';
import "./Landing1.css";
import tutorImage from "./../assets/tutor.jpg"

const LandingOne = () => {
    const yellowButtons = createTheme({
        palette: {
            primary: {
                main: yellow[500], // main is the default value 
                dark: red[500] // dark seems to be basically the hover value in dark mode
            }
        }
    })
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const snackBarDemo = () => {
        enqueueSnackbar("Im real cool!", {
            variant: 'success',
            autoHideDuration: 2500
        })
    }

    return (
        <div className="Landing1">
            <div className="Landing1Col" style={{ width: "85%" }}>
                <img src={tutorImage} className="ImageStyle" />
            </div>
            <div className="Landing1Col">
                <div elevation={20} className="rightColStyle">
                    <h1>Making education more <mark>accessible.</mark></h1>
                    <span>We're a non-profit organisation with a mission to provide tutoring services and access to learning resources for under-privileged students.</span>
                    <div className="buttonsDiv">


                        <div>
                            <h2>I am a:</h2>
                        </div>

                        <div className="buttonsInnerDiv">
                            <div elevation={12} className="buttonPaperStyle variant1" style={{ marginRight: "1.5vw"}}>
                                <span className="iconStyle">👨‍🎓</span>
                                <span className="iconTextStyle">Tutee</span>
                            </div>
 
                            <Divider orientation="vertical" style={{ borderRightWidth: "3px" }} />

                            <div elevation={12} className="buttonPaperStyle variant2" style={{ marginLeft: "1.5vw" }}>
                                <span className="iconStyle">👩‍🏫</span>
                                <span className="iconTextStyle">Tutor</span>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default LandingOne;