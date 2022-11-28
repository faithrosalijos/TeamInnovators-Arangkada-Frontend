import { Box } from '@mui/material';
import { useState } from 'react';
import { DrawerHeader } from '../styles/NavbarStyles';
import Navbar from '../components/Navbar';
import Topbar from '../components/Topbar';
import VehicleRentals from '../pages/faith/VehicleRentals';
import RentVehicle from '../pages/faith/RentVehicle';
import MyRental from '../pages/faith/MyRental';
import CancelRental from '../pages/faith/CancelRental';
import DriverDashboard from '../pages/faith/DriverDashboard';


const DriverMainLayout = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>

      <Topbar open={open} handleDrawerOpen={handleDrawerOpen} />

      <Navbar user="Driver" open={open} handleDrawerClose={handleDrawerClose} />

      <Box component="main" sx={{ flexGrow: 1, p: 3, padding: "0 32px" }}>
        <DrawerHeader />
        {/* Your driver pages goes here. */}
        <DriverDashboard />
        {/* <VehicleRentals /> */}
        {/* <RentVehicle /> */}
        {/* <MyRental /> */}
        {/* <CancelRental /> */}
      </Box>
    </Box>
  );
}

export default DriverMainLayout;