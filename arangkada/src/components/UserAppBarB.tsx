import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import Logo from '../images/logowhite.png';


const navItems = ['About Us', 'Contact Us', 'Login', 'Register'];

export default function DrawerAppBar() {

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" sx={{ backgroundColor: '#D2A857', height: 70 }}>
        <Toolbar>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block'}}}
          >
            <Stack direction='row'>
                <img src={Logo} alt={"arangkada logo"} style={{width: 40, height: 40, paddingTop: 18, paddingLeft: 30}}/>
                <strong><p style={{paddingLeft: 10, color: '#ffffff'}}>Arangkada</p></strong>
            </Stack>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#ffffff' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}