import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import whiteTower from '../assets/white-tower.png';

const pages = [{ name: 'Home', url: "/Home" }, { name: 'Gallery', url: "/Gallery" }, { name: 'References', url: "/References" }];

export default function Nav() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);

    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
        console.log("Clicked")
    };

    return (
        <AppBar position="fixed" sx={{ backgroundColor: 'navy' }}>
            <Container maxWidth="fixed">
                <Toolbar disableGutters>
                    <Box
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            alignItems: 'center',
                            gap: 1,
                            mr: 2,
                        }}
                    >
                        <img
                            src={whiteTower}
                            alt="White Tower"
                            style={{ width: '50px' }}
                        />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/Home"
                            sx={{
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'gold',
                                textDecoration: 'none',
                            }}
                        >
                            The Great Fire of 1917
                        </Typography>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                            id="menu-appbar"
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
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography component={"a"} href={page.url} sx={{ textAlign: 'center', textDecoration: "none", color: "#5b2333" }}>{page.name}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box
                        sx={{
                            display: { xs: 'flex', md: 'none' },
                            alignItems: 'center',
                            gap: 1,
                            mr: 2,
                        }}
                    >
                        <img
                            src={whiteTower}
                            alt="White Tower"
                            style={{ width: '50px' }}
                        />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="/Home"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'gold',
                                textDecoration: 'none',
                            }}
                        >
                            The Great Fire of 1917
                        </Typography>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                href={page.url}
                                sx={{ my: 2, color: 'gold', display: 'block', "&:hover": { backgroundColor: "#5b2333", color: "white" } }}
                            >
                                {page.name}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}