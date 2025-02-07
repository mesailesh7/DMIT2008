/*
This is essentially the "entrypoint to the application."

We're going to import our bootstrap entrypoint into this
file. This is going to run on every single page.
*/
// the bootstrap file for our css that we'll import.
import 'bootstrap/dist/css/bootstrap.min.css';

// let's modify the styles, the custom styles for our project.
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
