import '../styles/globals.css'

// MaterialUI theming imports
import { ThemeProvider } from '@mui/material';
import { theme } from '../utils/theme/config.js'


function MyApp({ Component, pageProps }) {
  return <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
}

export default MyApp
