import { Box } from '@mui/material';
import { useState } from 'react';
import { DrawerHeader } from '../styles/NavbarStyles';
import Navbar from '../components/Navbar';
import Topbar from '../components/Topbar';
import VehicleRentals from '../pages/faith/VehicleRentals';
import CancelRental from '../pages/faith/CancelRental';
import DriverDashboard from '../pages/faith/DriverDashboard';
import Rental from '../pages/faith/Rental';
import RentVehicle from '../pages/faith/RentVehicle';
import MyPayments from '../pages/kerr/MyPayments';
import PayRent from '../pages/kerr/PayRent';


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
          <DriverDashboard></DriverDashboard>
          <Rental></Rental>
          <RentVehicle></RentVehicle>
          <VehicleRentals></VehicleRentals>
          <CancelRental></CancelRental>
          <MyPayments></MyPayments>
          <PayRent></PayRent>
      </Box>
    </Box>
  );
}

export default DriverMainLayout;