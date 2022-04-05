import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import {useContext} from "react";
import {Auth} from "..//context/Auth";
import styled from '@emotion/styled';

const pages = ['Top Tracks','About Shrek', 'hw1', 'Lesson3', 'Movies','Counter'];

const Frame = styled('div')`
  display: flex;
  flex-direction: row;
  float: right;
`

const NavBar = () => {
  const navigate = useNavigate();
  const {token, setToken} = useContext(Auth);

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  
  function setUserData(data){
    axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDuHsqhY4QZKFs0X487o2bM7ITRnzbYJHU`,
      {
          email: data.email,
          password: data.password,
          returnSecureToken: true
      } 
      )   
      .then(localStorage.clear())
      .catch((error) => {
          console.log({...error})
          alert(`Failed to Log Out. Error message: ${error.response.data.error.message}`)
      })
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            My works
          </Typography>

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
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => navigate(`/${page}`)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{flexGrow: 0}}>
              { token ?
                <Frame>
                  <Tooltip title="Open settings">
                      <IconButton sx={{p: 0}}>
                          <Avatar alt="user_avatar" src="/static/images/avatar/2.jpg"/>
                      </IconButton>
                  </Tooltip>
                  <Button
                    onClick={() => {
                      navigate('/signin')
                      setUserData(Auth)
                      setToken(null);
                    } }
                    sx={{my: 2, color: 'white', display: 'block'}}
                  >
                    Log Out
                  </Button>
                </Frame>
                :
                <Frame>
                  <Button
                    onClick={() => navigate('/signin')}
                    sx={{my: 2, color: 'white', display: 'block'}}
                  >
                      Sign In
                  </Button>
                  <Button
                  onClick={() => navigate('/signup')}
                  sx={{my: 2, color: 'white', display: 'block'}}
                  >
                      Sign Up
                  </Button>
                </Frame>
              }
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
