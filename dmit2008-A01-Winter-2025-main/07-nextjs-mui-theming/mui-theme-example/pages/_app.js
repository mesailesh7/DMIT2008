import '../styles/globals.css'

import { ThemeProvider } from '@mui/material/styles';
// I dont' have a jsconfig.js so we'll use relative paths here
import { theme } from '../utils/theme/config'

function MyApp({ Component, pageProps }) {
  return <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
}

export default MyApp
