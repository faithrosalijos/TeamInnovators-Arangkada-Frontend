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
        

      </Routes>
    </ModalProvider>
    </ThemeProvider>
  );
}

export default App;
