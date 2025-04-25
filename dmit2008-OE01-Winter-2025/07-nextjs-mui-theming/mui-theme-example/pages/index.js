import Head from 'next/head';
import styles from '../styles/Home.module.css'

// material ui imports.
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PetsIcon from '@mui/icons-material/Pets';


export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100&display=swap" rel="stylesheet" />
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>

          <Container maxWidth="md">
            <Box sx={{ my: 4 }}>
              <Typography variant="h2" component="h2" color="primary">
                MUI Example
              </Typography>
              <Typography variant="body1" component="p" color="secondary">
                You can perhaps see why this is a popular domestic animal.
                <PetsIcon />
              </Typography>
            </Box>
          </Container>

        </main>
      </div>
    </>
  )
}
