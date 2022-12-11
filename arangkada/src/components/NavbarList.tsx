import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Logout, Person, Dashboard, Payment, Commute, People, Mail, DriveEta } from '@mui/icons-material';
import { NavbarLink } from './NavbarLink';

type NavbarListProps = {
  user: "Driver" | "Operator",
  open: boolean,
};

const NavbarList = ({ open, user }: NavbarListProps) => {
  const operatorList: { text: string, icon: React.ReactNode, link: string, end: boolean }[] = [
    { text: "Dashboard", icon: <Dashboard />, link: "/operator", end: true },
    { text: "Vehicles", icon: <Commute />, link: "", end: false },
    { text: "Add Vehicles", icon: <DriveEta />, link: "", end: false },
    { text: "Drivers Renting", icon: <People />, link: "", end: false },
    { text: "Approval Request", icon: <Mail />, link: "/operator/requests", end: false },
  ];

  const driverList: { text: string, icon: React.ReactNode, link: string, end: boolean }[] = [
    { text: "Dashboard", icon: <Dashboard />, link: "/driver", end: true },
    { text: "Vehicle Rentals", icon: <Commute />, link: "/driver/vehicles", end: false },
    { text: "Rental", icon: <DriveEta />, link: "/driver/rental", end: false },
    { text: "Payments", icon: <Payment />, link: "", end: false },
  ];
  
  const handleLogout = () => {

  }

  return (
    <>
      {/* Main List */}
      <List>
        {(user === "Driver" ? driverList: operatorList).map((listItem, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }} >
            <NavbarLink to={listItem.link} text={listItem.text} icon={listItem.icon} open={open} end={listItem.end} />
          </ListItem>
          ))}
      </List>
      <Divider />

      {/* Secondary List */}
      <List>
        <ListItem disablePadding sx={{ display: 'block' }}>
          <NavbarLink to={user === "Driver"? "": "/operator/operatorprofile"} text="Account" icon={<Person />} open={open} end={false} />
        </ListItem>
        <ListItem disablePadding sx={{ display: 'block' }}>
          <ListItemButton onClick={handleLogout} 
            sx={{
              color: "primary.contrastText",
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center', px: 2.5,
              "&.Mui-selected": { backgroundColor: "primary.dark" },
              "&.Mui-selected:hover": { backgroundColor: "primary.dark" },
          }}>
            <ListItemIcon sx={{ color: "primary.contrastText", minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center' }}>
              <Logout />
            </ListItemIcon>
            <ListItemText sx={{ opacity: open ? 1 : 0 }} primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );
}

export default NavbarList;