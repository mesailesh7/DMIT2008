import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

export default function ListSubmitButton({ clickHandler }) {

  return (
    <Grid size={2}>
      <Button
        type="submit"
        variant="contained"
        size="large"
        onClick={clickHandler}
      >
      Add Todo Item
      </Button>
    </Grid>
  );
}
