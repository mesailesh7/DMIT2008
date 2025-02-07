// in this file I want you to
// create a component
// has a form
// a button
import Button from '@mui/material/Button';
// a check box with a label
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
// and a text field
import TextField from '@mui/material/TextField'
// to use this in the index.js

export default function SimpleForm() {
  // if I wanted to add padding on the form would it style or sx
  // since form is not a "mui" element you need to use the style obj.
  return <form
    style={{marginTop: "10px"}}
  >
    <TextField
      id="outlined-basic"
      label="Our first text field"
      variant="outlined"
    />
    {/* So below you can see that you can
    pass in jsx as a prop to a component */}
    <FormGroup>
      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label="Check me"
      />
    </FormGroup>

    <Button variant="contained">Submit this Form</Button>
  </form>
}