import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import DriverMainLayout from './layouts/DriverMainLayout';
import OperatorMainLayout from './layouts/OperatorMainLayout';


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
      {/* Uncomment for driver pages
          Comment out if you will modify other pages. */}
      {/* <DriverMainLayout /> */}

      {/* Uncomment for operator pages
          Comment out if you will modify other pages. */}
      <OperatorMainLayout />

      {/* For landing page, registration, login, etc.
          Comment out if you will modify other pages. */}

    </ThemeProvider>
  );
}

export default App;
