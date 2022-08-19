import { Box, Stack} from '@mui/material/';
import "./ServiceCard.css";

const ServiceCard = ({props}) => {


    return (
        <Box
            className='ServiceCard'>
            <Stack direction='column'>
            <Box
                className='icon'
                component="img"
                src={props.img}
            />
                <h1>{props.title}</h1>
            </Stack>
            
        </Box>
    )
}

export default ServiceCard;