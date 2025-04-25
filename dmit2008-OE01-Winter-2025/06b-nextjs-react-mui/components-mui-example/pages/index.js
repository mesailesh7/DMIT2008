import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Home() {
  return (
    <>
        <main>
          <Container maxWidth="sm">
            <Box sx={{ my: 4 }}>
              <Typography variant="h2" component="h2">
                MUI looks good.
              </Typography>
              <Typography variant="p" component="p">
                You can perhaps see why this is a popular package.
              </Typography>
            </Box>
          </Container>
        </main>
    </>
  );
}
