
import './App.css'
import { Button } from '@mui/material/';
import { useSnackbar } from 'notistack';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { yellow, red } from '@mui/material/colors';


function App() {
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
    <div className="App">
      <h1>Hello World!</h1>
      <ThemeProvider theme={yellowButtons}>
        <Button onClick={() => { snackBarDemo() }} variant="contained">Click me 😊</Button>
      </ThemeProvider>
    </div>
  )
}

export default App
