import "@/styles/globals.css";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// we're going to import the "themeProvider"
import { ThemeProvider } from '@mui/material/styles';
// we're going import our theme
import { theme } from "@/utils/theme/config";

export default function App({ Component, pageProps }) {
  // for my theme to be applied on the site completely
  // I'm going to wrap my application component in the
  // ThemeProvider and inject my theme.

  return <ThemeProvider theme={theme}>
    <Component {...pageProps} />;
  </ThemeProvider>
}
