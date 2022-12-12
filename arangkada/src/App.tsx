import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import DriverMainLayout from './layouts/DriverMainLayout';
import './styles/SupportStyles.css';
import ModalProvider from 'mui-modal-provider';
import { Route, Routes } from 'react-router-dom';
import DriverDashboard from './pages/faith/DriverDashboard';
import VehicleRentals from './pages/faith/VehicleRentals';
import Rental from './pages/faith/Rental';
import CurrentRentalProvider from './helpers/CurrentRentalContext';
import RentVehicle from './pages/faith/RentVehicle';
import OperatorMainLayout from './layouts/OperatorMainLayout';
import OperatorDashboard from './pages/kerr/OperatorDashboard';
import ApprovalRequest from './pages/faith/ApprovalRequest';
import PendingRentalsProvider from './helpers/PendingRentalsContext';
import ProfilePageOp from './pages/cara/ProfilePageOp';
import EditProfilePageOp from './pages/cara/EditProfilePageOp';
import EditBusinessInfoPage from './pages/cara/EditBusinessInfoPage';
import DeleteAccPage from './pages/cara/DeleteAccPage';
import RegistrationOneOp from './pages/cara/RegistrationOneOp';
import RegistrationTwoOp from './pages/cara/RegistrationTwoOp';
import Landing from './components/karylle/LandingPage';
import ContactUsPage from './pages/cara/ContactUsPage';
import AboutUsPageD from './pages/karylle/AboutUsPageD';
import MyVehicles from './pages/mariel/MyVehicles';
import AddVehiclePage from './pages/mariel/AddVehiclePage';
import MyPayments from './pages/kerr/MyPayments';
import PayRent from './pages/kerr/PayRent';
import MyVehicles from './pages/mariel/MyVehicles';
import AddVehiclePage from './pages/mariel/AddVehiclePage';
import ViewandUpdateVehicle from './components/mariel/ViewVehicle';
import UpdateVehiclePage from './pages/mariel/UpdateVehiclePage';
import DeleteVehiclePage from './pages/mariel/DeleteVehiclePage';
import ViewVehiclePage from './pages/mariel/ViewVehiclePage';
import { useState } from 'react';
import { Vehicle } from './api/dataTypes';

/* Customize default mui theme */
const theme = createTheme({
  palette: {
    primary: {
      main: "#D2A857",
      contrastText: '#fff',
    },
    secondary: {
      main: "#99AEC1",
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: [
      'Inter',
      'sans-serif',
    ].join(','),
  },
});
/* Customize default mui theme */

const App = () => {

  return (
    <ThemeProvider theme={theme}>
    <ModalProvider>
      <Routes>
        {/* Driver Pages */}
        <Route path="driver" element={<DriverMainLayout />}>
          <Route index element={<DriverDashboard/>} />
          <Route path="vehicles">
            <Route index element={<VehicleRentals />} />
            <Route path=":id" element={<RentVehicle />} />
          </Route>
          <Route path="rental" element={<CurrentRentalProvider><Rental /></CurrentRentalProvider>} />

        </Route>
        
        {/* Driver Pages */}
        <Route path="operator" element={<OperatorMainLayout />}>
          <Route index element={<OperatorDashboard/>} />
          <Route path="requests" element={<PendingRentalsProvider><ApprovalRequest /></PendingRentalsProvider>} />

        </Route>

        {/* Other pages */}
        <Route path="registration">
          <Route index element={<RegistrationOneOp />} />
          <Route path="registeroperator" element={<RegistrationTwoOp/>} />
        </Route>

        <Route path="landing" element={<Landing/>} />
        <Route path="aboutus" element={<AboutUsPageD/>}/>
        <Route path="contactus" element={<ContactUsPage/>} />
        <Route path="login" element={<ContactUsPage/>} />


      </Routes>
    </ModalProvider>
    </ThemeProvider>
  );
}

export default App;
