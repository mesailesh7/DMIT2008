// import the createTheme from mui
import {  createTheme } from '@mui/material/styles';

// create the themeOptions
/*
The themeOptions below is using essentially the mui material builder
over here
*/
const themeOptions = {
  palette: {
    primary: {
      main: '#037f8a',
    },
    secondary: {
      main: '#050a9a',
    },
  },
  typography: {
    h2: {
      fontSize: '2rem',
    },
    body1: {
      fontSize: '1.2rem',
    },
  },
}
// create the theme and export it.
const theme = createTheme(themeOptions)

export { theme }