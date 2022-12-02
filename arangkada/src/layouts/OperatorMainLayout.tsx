import { Box } from '@mui/material';
import { useState } from 'react';
import { DrawerHeader } from '../styles/NavbarStyles';
import Navbar from '../components/Navbar';
import Topbar from '../components/Topbar';
import UpdateVehiclePage from '../pages/mariel/UpdateVehiclePage';
import MyVehicles from '../pages/mariel/MyVehicles';
import DeleteVehiclePage from '../pages/mariel/DeleteVehiclePage';
import AddVehiclePage from '../pages/mariel/AddVehiclePage';
import OperatorDashboard from '../pages/kerr/OperatorDashboard';


const OperatorMainLayout = () => {
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

      <Navbar user="Operator" open={open} handleDrawerClose={handleDrawerClose} />

      <Box component="main" sx={{ flexGrow: 1, p: 3, padding: "0 32px" }}>
        <DrawerHeader />
        {/* Your operator pages goes here. */}
          <OperatorDashboard></OperatorDashboard>
          <MyVehicles></MyVehicles>
          <AddVehiclePage></AddVehiclePage>
          <UpdateVehiclePage></UpdateVehiclePage>
          <DeleteVehiclePage></DeleteVehiclePage>

      </Box>
    </Box>
  );
}

export default OperatorMainLayout;