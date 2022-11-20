import React from 'react';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';

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
      {/* Your compoents here. */}
    </ThemeProvider>
  );
}

export default App;
