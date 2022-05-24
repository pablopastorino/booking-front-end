import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DrawerComp from "./Drawer";
import DBLogo from '../assets/images/db-logo.png';
import { colors } from "../theme/theme";
import { styled } from "@mui/system";
import { SearchBar } from "./SearchBar";
import { Link, useLocation } from "react-router-dom";

const ContainerButton = styled(Button)(
  () => `
    color: ${colors.primary}; 
    border-color: ${colors.primary};
      padding: 0.5em 1.7em;
      text-transform: none;
      font-size: 1.1em;
    `
);


const Header = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const isMatchLG = useMediaQuery(theme.breakpoints.down("lg"));
  const isMatchMD = useMediaQuery(theme.breakpoints.down("md"));
  const {pathname} = useLocation();
  const isHome = pathname === '/' || pathname === '/home';
  const isSignIn = pathname === '/signin';
  const isLogin = pathname === '/login'


  return (
    <>
      <AppBar sx={{ background: "#fff", position: 'sticky' }}>
        <Toolbar sx={{ padding: 1, display: 'flex', justifyContent: 'space-between' }}>
          <Box
            display='flex'
          >
            <Link
              to="/home"
            >
              <img src={DBLogo} alt='Logo Digital Booking' />
            </Link>
            {!isMatchLG && <Link
                to="/home"
                style={{ textDecoration: 'none' }}
              >
                <Typography
                  variant="h6"
                  sx={{ color: colors.primary, fontStyle: 'italic', fontSize: '1.5em', fontWeight: 400, margin: '1.6em 0em 0em 1em' }}
                >
                  Sentite como en tu hogar
                </Typography>
              </Link>
              }
          </Box>
          {!isMatch ? (
            <Box>
              {!isSignIn && <Link
                to='/signin'
                style={{marginLeft: "auto", textDecoration: 'none'}}
              >
                <ContainerButton
                  sx={{
                    '&:hover': {
                      borderColor: `${colors.primaryDark}`,
                      background: `${colors.white}`
                    }
                  }}
                  variant="outlined"
                >
                  Crear cuenta
                </ContainerButton>
              </Link>}
              {!isLogin && <Link
                to='/login'
                style={{marginLeft: "15px", textDecoration: 'none'}}
              >
                <ContainerButton
                  sx={{
                    '&:hover': {
                      borderColor: `${colors.primaryDark}`,
                      background: `${colors.white}`
                    }
                  }}
                  variant="outlined"
                >
                  Iniciar sesión
                </ContainerButton>
              </Link>}
            </Box>
          ) : (
            <>
              <DrawerComp />
            </>
          )}
        </Toolbar>
        {(!isMatchMD && isHome) && <SearchBar />}
      </AppBar>
    </>
  );
};

export default Header;
