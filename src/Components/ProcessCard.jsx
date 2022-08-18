import { Box, Stack} from '@mui/material/';
import "./ProcessCard.css";

const ProcessCard = ({props}) => {


    return (
        <Box
            className='ProcessCard'>
            <Box className='IconHolder'>
                <Box
                    className='ProcessIcon'
                    component="img"
                    src={props.img}
                />
            </Box>
            <Box
                className='content'>
                <h1>{props.title}</h1>
                <p>{props.content}</p>
            </Box>
            
        </Box>
    )
}

export default ProcessCard;