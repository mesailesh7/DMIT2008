// create a custom components called navbar
// I want to you make the minimal version of a navbar using MUI.
// I want you to use typography in the home component to display it.

// for imports on mui this is the recommended
// way of importing them, use this way.
import Container from '@mui/material/Container';
import Typography from "@mui/material/Typography"

import Navbar from "@/components/Navbar";
import SimpleForm from '@/components/SimpleForm';

export default function Home() {
  return (
    <div>
      <Navbar title={"MUI Research"}/>
      {/* add a container!
        Please refer to the docs right here
        https://mui.com/material-ui/api/container/
        We're going to add a custom one off
        style with the sx prop.
        The sx prop gives you customization on the
        styles for that component
        Read here https://mui.com/system/getting-started/the-sx-prop/
      */}
      <Container
        component="main"
        maxWidth="md"
        sx={{marginTop: 8}}
      >
        <Typography variant="h3" component="h1">
          An Example of using MUI
        </Typography>
        <SimpleForm />
      </Container>

    </div>
  );
}
