import { Divider, IconButton } from '@mui/material';
import { Drawer, DrawerHeader } from '../styles/NavbarStyles';
import { ChevronLeft, Dashboard, Payment, Commute, People, Mail, DriveEta } from '@mui/icons-material';
import NavbarList from './NavbarList';

type NavbarProps = {
  user: "Driver" | "Operator",
  open: boolean,
  handleDrawerClose: () => void,
}

const Navbar = ({ user, open, handleDrawerClose }: NavbarProps) => {
  const operatorList: { text: string, icon: React.ReactNode, link: string }[] = [
    { text: "Dashboard", icon: <Dashboard />, link: "" },
    { text: "Vehicles", icon: <Commute />, link: "" },
    { text: "Add Vehicles", icon: <DriveEta />, link: "" },
    { text: "Drivers Renting", icon: <People />, link: "" },
    { text: "Approval Request", icon: <Mail />, link: "" },
    // Add or remove page link in here
  ];

  const driverList: { text: string, icon: React.ReactNode, link: string }[] = [
    { text: "Dashboard", icon: <Dashboard />, link: "" },
    { text: "Vehicle Rentals", icon: <Commute />, link: "" },
    { text: "Rental", icon: <DriveEta />, link: "" },
    { text: "Payments", icon: <Payment />, link: "" },
  ];

  return (
    <Drawer variant="permanent" open={open} sx={{ "& .MuiPaper-root": { backgroundColor: "primary.main" } }}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose} sx={{ color: "primary.contrastText" }}>
          <ChevronLeft />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <NavbarList list={user === "Driver" ? driverList : operatorList} open={open} />
    </Drawer>
  );
}

export default Navbar;