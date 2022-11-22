import { Badge, Box, IconButton, Toolbar } from "@mui/material";
import { AppBar } from "../styles/TopbarStyles";
import Logo from '../images/logo.svg';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';


type TopbarProps = {
  open: boolean,
  handleDrawerOpen: () => void,
}

const Topbar = ({ open, handleDrawerOpen }: TopbarProps) => {
  return (
    <AppBar position="fixed" open={open} sx={{ backgroundColor: "primary.dark", alignItem: "center" }}>
      <Toolbar>
        <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start" sx={{ marginRight: 5, ...(open && { display: 'none' }), }}>
          <MenuIcon />
        </IconButton>
        <Box sx={{ width: "100%" }}>
          <img src={Logo} alt={"arangkada logo"} />
        </Box>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton color="inherit">
          <LogoutIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Topbar;