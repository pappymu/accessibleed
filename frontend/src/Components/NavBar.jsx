import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './NavBar.css';

const pages = ['Home', 'What We Offer', 'Who We Work With', 'FAQ'];
const darkButtons = createTheme({
    palette: {
        mode: 'dark'
    },

})

const NavBar = () => {

    const navigate = useNavigate()

    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        // set the popup menu anchor to be the menu button
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handlePageClick = (page) => {
        console.log(page)
    }


    return (
        <AppBar position="fixed" sx={{ overflowX: 'hidden', width: '100vw' }}>
            <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', ml: '2vw' }}>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        sx={{
                            mr: 5,
                            display: { xs: 'none', md: 'flex' },
                            fontWeight: 700,
                            letterSpacing: '.15rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Learny
                    </Typography>

                    <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', width: '100%' }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                            className='appBarPaper'
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}

                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <ThemeProvider theme={darkButtons}>
                                    <Button
                                        key='signup'
                                        onClick={() => {
                                        }}
                                        variant='outlined'
                                        sx={{ py: 2, color: "rgb(247, 247, 247)", margin: 1 }}
                                    >
                                        Go to Dashboard
                                    </Button>
                                </ThemeProvider>
                                <Button
                                    className='signUpButton'
                                    key='signup'
                                    onClick={() => {
                                        navigate('/register')
                                    }}
                                    variant='contained'
                                    sx={{ py: 2, color: "rgb(247, 247, 247)", margin: 1 }}
                                >
                                    Find a Tutor / Join us
                                </Button>
                            </Box>
                        </Menu>

                        <Box sx={{ justifySelf: 'center', display: 'flex', alignItems: 'center' }}>
                            <AdbIcon sx={{ mr: 1 }} />
                            <Typography
                                variant="h5"
                                noWrap
                                component="a"
                                sx={{
                                    mr: 2,
                                    display: { xs: 'flex', md: 'none' },
                                    flexGrow: 1,
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                Learny
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={() => {
                                    handleCloseNavMenu()
                                    handlePageClick(page)
                                }}
                                sx={{ py: 2, color: "rgb(247, 247, 247)", pr: 3, pt: 2, pb: 2, pl: 3 }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                </Box>
                <Box sx={{ mr: '2vw', display: { xs: 'none', md: 'flex' } }}>
                    <ThemeProvider theme={darkButtons}>
                        <Button
                            key='signup'
                            onClick={() => {
                            }}
                            variant='outlined'
                            sx={{ py: 2, color: "rgb(247, 247, 247)", pr: 3, pt: 1.5, pb: 1.5, pl: 3 }}
                        >
                            Login
                        </Button>
                    </ThemeProvider>
                    <Button
                        className='signUpButton'
                        key='signup'
                        onClick={() => {
                            navigate('/register')
                        }}
                        variant='contained'
                        sx={{ py: 2, color: "rgb(247, 247, 247)", pr: 3, pt: 1.5, pb: 1.5, pl: 3, ml: "1ch" }}
                    >
                        Find a Tutor / Join us
                    </Button>

                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;