// in here we're going to import the create theme
import { createTheme } from '@mui/material/styles';

// create a theme options object
export const themeOptions = {
  palette: {
    text: {
      primary: 'rgba(37,4,148,0.87)',
    },
    primary: {
      main: '#390254',
    },
  },
};

// to create the themeOptions
// usable MUI theme.
const theme = createTheme(themeOptions)


// we're going to export it.
export { theme }
