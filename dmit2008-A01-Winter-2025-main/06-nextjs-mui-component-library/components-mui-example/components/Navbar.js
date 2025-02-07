
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import BiotechIcon from '@mui/icons-material/Biotech';
// note that @mui/icons-material is different
// than @mui/material different packages need
// different installations.

// we're creating the custom component that will contain the mui navbar
// make the title prop pass it in, in the index.js
export default function Navbar({title}) {
  // take a look here https://mui.com/material-ui/react-app-bar/#basic-app-bar
  // for the docs we're using some of the pieces here.
  return <AppBar>
    <Toolbar>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        {/* the icon using material icons */}
        <BiotechIcon />
      </IconButton>

      {/* I want you to look as an h6 but use a div to render */}
      <Typography
        variant="h6"
        component="div"
      >
        {title}
      </Typography>
    </Toolbar>
  </AppBar>
}