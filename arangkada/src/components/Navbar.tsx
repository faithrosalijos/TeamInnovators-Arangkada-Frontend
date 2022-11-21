import { Divider, IconButton } from '@mui/material';
import { Drawer, DrawerHeader } from '../styles/NavbarStyles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import PaymentIcon from '@mui/icons-material/Payment';
import CommuteIcon from '@mui/icons-material/Commute';
import PeopleIcon from '@mui/icons-material/People';
import MailIcon from '@mui/icons-material/Mail';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import NavbarList from './NavbarList';

type NavbarProps = {
  user: "Driver" | "Operator",
  open: boolean,
  handleDrawerClose: () => void,
}

const Navbar = ({ user, open, handleDrawerClose }: NavbarProps) => {
  const operatorList: { text: string, icon: React.ReactNode, link: string }[] = [
    {text: "Dashboard", icon: <DashboardIcon />, link: ""}, 
    {text: "Profile", icon: <PersonIcon />, link: ""}, 
    {text: "My Vehicles", icon: <CommuteIcon />, link: ""}, 
    {text: "Drivers Renting", icon: <PeopleIcon />, link: ""}, 
    {text: "Approval Request", icon: <MailIcon />, link: ""},
    {text: "Transactions", icon: <PaymentIcon />, link: ""},
  ];

  const driverList: { text: string, icon: React.ReactNode, link: string }[] = [
    { text: "Dashboard", icon: <DashboardIcon />, link: "" },
    { text: "Profile", icon: <PersonIcon />, link: "" },
    { text: "Vehicle Rentals", icon: <CommuteIcon />, link: "" },
    { text: "My Rental", icon: <DriveEtaIcon />, link: "" },
    { text: "Payments", icon: <PaymentIcon />, link: "" },
  ];

  return (
    <Drawer variant="permanent" open={open} sx={{ "& .MuiPaper-root": { backgroundColor: "primary.main" } }}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose} sx={{ color: "primary.contrastText" }}>
          <ChevronLeftIcon />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <NavbarList list={user === "Driver"? driverList: operatorList} open={open} />
    </Drawer>
  );
}

export default Navbar;