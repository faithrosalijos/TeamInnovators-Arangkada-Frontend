import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Logout, Person, Dashboard, Payment, Commute, People, Mail, DriveEta } from '@mui/icons-material';
import { NavLink, NavLinkProps, useLocation } from 'react-router-dom'; 

type NavbarListProps = {
  user: "Driver" | "Operator",
  open: boolean,
};

const NavbarList = ({ open, user }: NavbarListProps) => {
  const currentPath = useLocation();

  const operatorList: { text: string, icon: React.ReactNode, link: string }[] = [
    { text: "Dashboard", icon: <Dashboard />, link: "/operator" },
    { text: "Vehicles", icon: <Commute />, link: "/operator/vehicles" },
    { text: "Add Vehicles", icon: <DriveEta />, link: "/operator/vehicles/addvehicle" },
    { text: "Drivers Renting", icon: <People />, link: "" },
    { text: "Approval Request", icon: <Mail />, link: "/operator/requests" },
  ];

  const driverList: { text: string, icon: React.ReactNode, link: string }[] = [
    { text: "Dashboard", icon: <Dashboard />, link: "/driver" },
    { text: "Vehicle Rentals", icon: <Commute />, link: "/driver/vehicles" },
    { text: "Rental", icon: <DriveEta />, link: "/driver/rental" },
    { text: "Payments", icon: <Payment />, link: "" },
  ];
  
  const handleLogout = () => {

  }

  return (
    <>
      {/* Main List */}
      <List>
        {(user === "Driver" ? driverList: operatorList).map((listItem, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }} >
            <ListItemButton 
              {...{ component: NavLink, to: listItem.link }}
              // selected={currentPath.pathname === listItem.link}
              sx={{
              color: "primary.contrastText",
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center', px: 2.5,
              "&.Mui-selected": { backgroundColor: "primary.dark" },
              "&.Mui-selected:hover": { backgroundColor: "primary.dark" },
            }}>
              <ListItemIcon sx={{ color: "primary.contrastText", minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center' }}>
                {listItem.icon}
              </ListItemIcon>
              <ListItemText sx={{ opacity: open ? 1 : 0 }} primary={listItem.text} />
            </ListItemButton>
          </ListItem>
          ))}
      </List>
      <Divider />

      {/* Secondary List */}
      <List>
        <ListItem disablePadding sx={{ display: 'block' }}>
          <ListItemButton 
            {...{ component: NavLink, to: user === "Driver"? "": "/operator/operatorprofile"}}
            // selected={currentPath.pathname === (user === "Driver"? "": "")}
            sx={{
              color: "primary.contrastText",
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center', px: 2.5,
              "&.Mui-selected": { backgroundColor: "primary.dark" },
              "&.Mui-selected:hover": { backgroundColor: "primary.dark" },
          }}>
            <ListItemIcon sx={{ color: "primary.contrastText", minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center' }}>
              <Person />
            </ListItemIcon>
            <ListItemText sx={{ opacity: open ? 1 : 0 }} primary="Account" />
          </ListItemButton>
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