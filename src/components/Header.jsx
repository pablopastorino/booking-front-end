import React, { useState } from "react";
import {
  AppBar,
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

const ContainerButton = styled(Button)(
    () => `
    color: ${colors.orange}; 
    border-color: ${colors.orange};
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

  return (
    <>
      <AppBar sx={{ background: "#fff", padding: 1, position: 'sticky' }}>
        <Toolbar>
          <img src={DBLogo} alt='Logo Digital Booking'/>
          {!isMatch ? (
            <>
              {!isMatchLG && <Typography 
                    variant="h6" 
                    sx={{color: colors.orange, fontStyle: 'italic', fontSize: '1.5em', fontWeight: 400, margin: '1.1em 0em 0em 1em'}}
                >
                Sentite como en tu hogar
              </Typography>}
              <ContainerButton 
                    sx={{ 
                        marginLeft: "auto",
                        '&:hover': {
                            borderColor: `${colors.darkOrange}`,
                            background: `${colors.white}`
                          }  
                    }} 
                    variant="outlined"
                >
                Crear cuenta
              </ContainerButton>
              <ContainerButton 
                    sx={{ 
                        marginLeft: "10px", 
                        '&:hover': {
                            borderColor: `${colors.darkOrange}`,
                            background: `${colors.white}`
                          } 
                    }} 
                    variant="outlined"
                >
                    Iniciar sesión
              </ContainerButton>
            </>
          ) : (
            <>
                <DrawerComp />
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
