import { Drawer, DrawerHeader } from '../styles/NavbarStyles';
import { ChevronLeft } from '@mui/icons-material';
import NavbarList from './NavbarList';
import { Divider, IconButton } from '@mui/material';

type NavbarProps = {
  user: "Driver" | "Operator",
  open: boolean,
  handleDrawerClose: () => void,
}

const Navbar = ({ user, open, handleDrawerClose }: NavbarProps) => {

  return (
    <Drawer variant="permanent" open={open} sx={{ "& .MuiPaper-root": { backgroundColor: "primary.main" } }}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose} sx={{ color: "primary.contrastText" }}>
          <ChevronLeft />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <NavbarList open={open} user={user} />
    </Drawer>
  );
}

export default Navbar;