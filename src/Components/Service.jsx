import { Box, Stack, Fade} from '@mui/material/';
import ServiceCard from './ServiceCard';
import "./Service.css";

const Service = (props) => {
    let data = [
        {img: "https://static.vecteezy.com/system/resources/previews/001/206/198/original/mountain-icon-png.png",
        title: "We provide the best tuition in Singapore!"},
        {img: "https://static.vecteezy.com/system/resources/previews/001/206/198/original/mountain-icon-png.png",
        title: "We provide the best tuition in Singapore!"},
        {img: "https://static.vecteezy.com/system/resources/previews/001/206/198/original/mountain-icon-png.png",
        title: "We provide the best tuition in Singapore!"},
    ]

    return (
        <Fade in={true}>
            <Box classname='main'>
                <Stack
                    className='Service'
                    direction='column'>
                    <h1>
                        What We Provide
                    </h1>

                    <Stack 
                        className='Cards' 
                        direction='row'
                        spacing="20px">

                        {data.map((d) => {
                            return (<ServiceCard props={d} />)
                        }
                        )}
                        
                    </Stack>
                
                </Stack>
                <div class='Wave' />
            </Box>
        </Fade>
    )
}

export default Service;