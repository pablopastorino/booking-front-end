
import React, { useState } from "react";
import {
    Box,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from '@mui/icons-material/Clear';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { colors } from "../theme/theme";
const pages = ["Crear cuenta", "Iniciar sesión"];
const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        PaperProps={{
            sx: { width: "80%"},
          }}
      >
          <Box
            height='25vh'
            position='relative'
            sx={{background: colors.primary}}
            display='flex'
            alignItems='flex-end'
            justifyContent='flex-end'
            padding={1}
          >
              <ClearIcon
                fontSize="large"
                sx={{position: 'absolute', top: '0.1em', left: '0.1em', cursor: 'pointer', color: colors.white}}
                onClick={() => setOpenDrawer(!openDrawer)}
              />
              <Typography variant="h6" sx={{color: colors.white}}>
                  MENÚ
              </Typography>
          </Box>
        <List>
          {pages.map((page, index) => (
            <ListItemButton key={index} alignItems='center' divider dir="rtl">
              <ListItemIcon>
                <ListItemText>{page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
        <Box
            position='absolute'
            bottom='1em'
            right='1em'
            display='flex'
            gap={1}
        >
            <FacebookIcon sx={{fontSize: '2em', cursor:'pointer'}}/>
            <LinkedInIcon sx={{fontSize: '2em', cursor:'pointer'}}/>
            <TwitterIcon sx={{fontSize: '2em', cursor:'pointer'}}/>
            <InstagramIcon sx={{fontSize: '2em', cursor:'pointer'}}/>
        </Box>
      </Drawer>
      <IconButton
        sx={{ color: colors.dark, marginLeft: "auto", fontSize: '2.5rem' }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color={colors.dark} sx={{fontSize: '2.5rem'}}/>
      </IconButton>
    </>
  );
};

export default DrawerComp;