import './styles/SupportStyles.css';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import DriverMainLayout from './layouts/DriverMainLayout';
import ModalProvider from 'mui-modal-provider';
import { Route, Routes } from 'react-router-dom';
import DriverDashboard from './pages/faith/DriverDashboard';
import VehicleRentals from './pages/faith/VehicleRentals';
import Rental from './pages/faith/Rental';
import CurrentRentalProvider from './helpers/CurrentRentalContext';
import RentVehicle from './pages/faith/RentVehicle';
import OperatorMainLayout from './layouts/OperatorMainLayout';
import OperatorDashboard from './pages/kerr/OperatorDashboard';
import PendingRentalsProvider from './helpers/PendingRentalsContext';
import ProfilePageOp from './pages/cara/ProfilePageOp';
import EditProfilePageOp from './pages/cara/EditProfilePageOp';
import EditBusinessInfoPage from './pages/cara/EditBusinessInfoPage';
import DeleteAccPage from './pages/cara/DeleteAccPage';
import RegistrationOneOp from './pages/cara/RegistrationOneOp';
import RegistrationTwoOp from './pages/cara/RegistrationTwoOp';
import RegistrationDriver from './pages/karylle/RegisterDriver1';
import Landing from './components/karylle/Landing';
import ContactUsPage from './pages/cara/ContactUsPage';
import AboutUsPageD from './pages/karylle/AboutUsPageD';
import MyPayments from './pages/kerr/MyPayments';
import PayRent from './pages/kerr/PayRent';
import MyVehicles from './pages/mariel/MyVehicles';
import AddVehiclePage from './pages/mariel/AddVehiclePage';
import UpdateVehiclePage from './pages/mariel/UpdateVehiclePage';
import DeleteVehiclePage from './pages/mariel/DeleteVehiclePage';
import ViewVehiclePage from './pages/mariel/ViewVehiclePage';
import CancelRental from './pages/faith/CancelRental';
import SnackbarContextProvider from './helpers/SnackbarContext';
import Snackbar from './components/Snackbar';
import RentalApplications from './pages/faith/RentalApplications';
import Drivers from './pages/faith/Drivers';
import DischargeDriver from './pages/faith/DischargeDriver';
import MainProfileD from './pages/karylle/MainProfileD';
import EditAccPageD from './pages/karylle/EditAccPageD';
import EditLicensePage from './pages/karylle/EditLicensePage';
import DeleteAccPageD from './pages/karylle/DeleteAccPageD';
import LoginPage from './pages/karylle/LoginPage';

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
    <SnackbarContextProvider>
      <Routes>
        {/* Driver Pages */}
         <Route path="driver" element={<DriverMainLayout />}>
          <Route index element={<DriverDashboard />} />
          <Route path="vehicle-rentals">
            <Route index element={<VehicleRentals />} />
            <Route path=":id" element={<RentVehicle />} />
          </Route>
          <Route path="rental">
            <Route index element={<CurrentRentalProvider><Rental /></CurrentRentalProvider>} />
            <Route path="cancel" element={<CurrentRentalProvider><CancelRental /></CurrentRentalProvider>} />
          </Route>
          <Route path="payments">
              <Route index element={<MyPayments />} />
              <Route path="payrent" element={<PayRent />} />
            </Route>
          <Route path="rental" element={<CurrentRentalProvider><Rental /></CurrentRentalProvider>} />
          <Route path="driverprofile">
            <Route index element={<MainProfileD/>} />
            <Route path="editdriverprof" element={<EditAccPageD/>} />
            <Route path="editlicense" element={<EditLicensePage/>} />
            <Route path="deletedr" element={<DeleteAccPageD/>} />
          </Route>
          </Route>

        {/* Operator Pages */}
        <Route path="operator" element={<OperatorMainLayout />}>
          <Route index element={<OperatorDashboard/>} />
          <Route path="vehicles">
            <Route index element={<MyVehicles />} />
            <Route path="update/:id" element={<UpdateVehiclePage />} />
            <Route path="delete/:id" element={<DeleteVehiclePage />} />
            <Route path="view/:id" element={<ViewVehiclePage />} />
          </Route>
          <Route path="add-vehicle" element={<AddVehiclePage />} />
          <Route path="drivers">
            <Route index element={<Drivers />} />
            <Route path="discharge" element={<DischargeDriver />} />
          </Route>
          <Route path="rental-applications" element={<RentalApplications />} />
          <Route path="operatorprofile">
            <Route index element={<ProfilePageOp/>} />
            <Route path="editoperatorprof" element={<EditProfilePageOp/>} />
            <Route path="editbusinessinfo" element={<EditBusinessInfoPage/>} />
            <Route path="deleteop" element={<DeleteAccPage/>} />
          </Route>
        </Route>

        {/* Other pages */}
        <Route path="registration">
          <Route index element={<RegistrationOneOp />} />
          <Route path="registeroperator" element={<RegistrationTwoOp />} />
          <Route path="registerdriver" element={<RegistrationDriver />} />
        </Route>

        <Route path="landing" element={<Landing />} />
        <Route path="aboutus" element={<AboutUsPageD />} />
        <Route path="contactus" element={<ContactUsPage />} />
        <Route path="login" element={<LoginPage />} />

      </Routes>

      <Snackbar />
    </SnackbarContextProvider>
    </ModalProvider>
    </ThemeProvider>
  );
}

export default App;
