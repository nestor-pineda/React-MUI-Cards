import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { styled } from "@mui/material/styles";

const CustomizedFormControl = styled(FormControl)`
  color: #20b2aa;
  display: block;
  background-color: green;
`;

const Create = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState("female");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);

    if (title == "") {
      setTitleError(true);
    }
    if (details == "") {
      setDetailsError(true);
    }
    if (title && details) {
      console.log(title, details, category);
    }
  };

  return (
    <Container size="sm">
      <Typography variant="h6" component="h2" color="textSecondary" gutterBottom>
        Create a New Note
      </Typography>

      <form noValidate autocomlete="off" onSubmit={handleSubmit}>
        <TextField onChange={(e) => setTitle(e.target.value)} label="Note Title" variant="outlined" color="secondary" fullWidth required error={titleError} />

        <TextField onChange={(e) => setDetails(e.target.value)} label="Details" variant="outlined" color="secondary" fullWidth required multiline rows={4} error={detailsError} />

        <CustomizedFormControl>
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </CustomizedFormControl>
        <Button onClick={() => console.log("you clicked me")} type="submit" color="primary" variant="contained">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Create;
