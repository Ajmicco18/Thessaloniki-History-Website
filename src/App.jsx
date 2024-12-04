import {
  Routes,
  Route,
  Link
} from 'react-router-dom';
import React from 'react';
import Home from './Home';
import References from './References';
import Gallery from './Gallery';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import whiteTower from './assets/white-tower.png';
import "./index.css"

const pages = [{ name: 'Home', url: "/" }, { name: 'Gallery', url: "/Gallery" }, { name: 'References', url: "/References" }];

function App() {

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);

  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    console.log("Clicked")
  };

  return (
    <>
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
                href="/Thessaloniki-History-Website/"
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
                    <Link to={`/Thessaloniki-History-Website${page.url}`} style={{ textAlign: 'center', textDecoration: "none", color: "#5b2333" }}>{page.name}</Link>
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
                href="/Thessaloniki-History-Website/"
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

            <Box sx={{ my: 1, flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Link key={page} to={`/Thessaloniki-History-Website${page.url}`} className='link' style={{ color: 'gold', padding: "10px", textDecoration: "none" }}>{page.name}</Link>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Routes>
        <Route exact path="/Thessaloniki-History-Website/" element={<Home />} />
        <Route path="/Thessaloniki-History-Website/References" element={<References />} />
        <Route path="/Thessaloniki-History-Website/Gallery" element={<Gallery />} />
      </Routes>
    </>
  )
}

export default App
