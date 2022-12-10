import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ButtonGroup, ListItem, ListItemButton, Stack } from '@mui/material';
import Logo from '../images/logobrown.png';
import { NavLink, useNavigate } from 'react-router-dom';


export default function DrawerAppBar() {

  const navItems: { text: string, link: string }[] = [
    { text: "About Us", link: "/aboutus" },
    { text: "Contact Us", link: "/contactus" },
    { text: "Login", link: "/login" },
  ];
  

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" sx={{ backgroundColor: '#ffffff', height: 70 }}>
        <Toolbar>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block'}}}
          >
            <Stack direction='row'>
                <img src={Logo} alt={"arangkada logo"} style={{width: 40, height: 40, paddingTop: 18, paddingLeft: 30}}/>
                <strong><p style={{paddingLeft: 10, color: '#90794C'}}>Arangkada</p></strong>
            </Stack>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((listItem, index) => (
              <ButtonGroup orientation='horizontal'>
                <ListItem key={index}>
                  <ListItemButton sx={{ color: '#90794C'}} {...{ component: NavLink, to: listItem.link }}>
                    {listItem.text}
                  </ListItemButton>
                </ListItem>
              </ButtonGroup>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}