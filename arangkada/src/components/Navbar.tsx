import { Divider, IconButton } from '@mui/material';
import { Drawer, DrawerHeader } from '../styles/NavbarStyles';
import { ChevronLeft, Dashboard, Person, Payment, Commute, People, Mail, DriveEta } from '@mui/icons-material';
import NavbarList from './NavbarList';

type NavbarProps = {
  user: "Driver" | "Operator",
  open: boolean,
  handleDrawerClose: () => void,
}

const Navbar = ({ user, open, handleDrawerClose }: NavbarProps) => {
  const operatorList: { text: string, icon: React.ReactNode, link: string }[] = [
    { text: "Dashboard", icon: <Dashboard />, link: "" },
    { text: "Profile", icon: <Person />, link: "" },
    { text: "My Vehicles", icon: <Commute />, link: "" },
    { text: "Drivers Renting", icon: <People />, link: "" },
    { text: "Approval Request", icon: <Mail />, link: "" },
    { text: "Transactions", icon: <Payment />, link: "" },
  ];

  const driverList: { text: string, icon: React.ReactNode, link: string }[] = [
    { text: "Dashboard", icon: <Dashboard />, link: "" },
    { text: "Profile", icon: <Person />, link: "" },
    { text: "Vehicle Rentals", icon: <Commute />, link: "" },
    { text: "My Rental", icon: <DriveEta />, link: "" },
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