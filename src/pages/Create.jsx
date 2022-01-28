import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const style = {
  mt: 2,
  mb: 2,
  boxShadow: 6,
  display: "block",
};

const Create = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);

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
      console.log(title, details);
    }
  };

  return (
    <Container size="sm">
      <Typography variant="h6" component="h2" color="textSecondary" gutterBottom>
        Create a New Note
      </Typography>

      <form noValidate autocomlete="off" onSubmit={handleSubmit}>
        <TextField sx={{ ...style }} onChange={(e) => setTitle(e.target.value)} label="Note Title" variant="outlined" color="secondary" fullWidth required error={titleError} />

        <TextField sx={{ ...style }} onChange={(e) => setDetails(e.target.value)} label="Details" variant="outlined" color="secondary" fullWidth required multiline rows={4} error={detailsError} />

        <Button onClick={() => console.log("you clicked me")} type="submit" color="primary" variant="contained">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Create;
