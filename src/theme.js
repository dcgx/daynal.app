import { createMuiTheme } from '@material-ui/core';
import variables from './styles/_variables.scss';

// ec0b43-58355e-7ae7c7-d6ffb7-fff689
export const theme = createMuiTheme({
  palette: {
    primary: {
      // light: undefined
      main: '#EC0B43',
      // dark: undefined
      contrastText: '#fff',
    },
    secondary: {
      // light: undefined,
      main: '#58355E',
      // contrastText: undefined,
    },
    // error: undefined,
    // warning: undefined,
    info: {
      main: '#7AE7C7',
    },
    // success: undefined,
    // text: undefined,
  },
});
