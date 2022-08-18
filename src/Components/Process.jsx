import { Box, Stack, Fade} from '@mui/material/';
import Arrow from './Arrow';
import ProcessCard from './ProcessCard';
import "./Process.css";

const Process = (props) => {

    let steps = [
        {img: 'https://static.vecteezy.com/system/resources/previews/001/206/198/original/mountain-icon-png.png',
         title: 'Register',
         content: 'Give me all your details'},
         {img: 'https://static.vecteezy.com/system/resources/previews/001/206/198/original/mountain-icon-png.png',
         title: 'Verify',
         content: 'We contact you'},
         {img: 'https://static.vecteezy.com/system/resources/previews/001/206/198/original/mountain-icon-png.png',
         title: 'Enter',
         content: 'Welcome aboard'},
    ]


    return (
        <Fade in={true}>
            <Box>
                <Box
                    className='Process'>
                    <h1> How Do I Sign Up? </h1>

                    <Stack direction="row"
                        spacing = '20px'>
                        {steps.map((step) => {
                            return ( <>
                                        <ProcessCard props={step} />
                                        {step === steps[steps.length-1] ? null : <Arrow /> }
                                    </>)
                        }
                        )}
                    </Stack>
                    
                </Box>
                <div class='Wave2' />
            </Box>
        </Fade>
    )
}

export default Process;