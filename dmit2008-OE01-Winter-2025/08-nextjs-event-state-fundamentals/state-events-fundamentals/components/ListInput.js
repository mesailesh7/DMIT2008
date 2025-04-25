import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'


export default function ListInput({ changeHandler, inputValue }) {

  return (
    <Grid size={10}>
     <TextField
      variant="outlined"
      label="Todo Item"
      fullWidth
      sx={{
        contrastText: "blue"
      }}
      onChange={changeHandler}
      value={inputValue}
     >
     </TextField>
    </Grid>
  );
}
