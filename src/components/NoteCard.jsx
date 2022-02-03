import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { makeStyles } from "@mui/styles";
import { useTheme } from "../themeContext/ThemeContext";
import Avatar from "@mui/material/Avatar";
import { yellow, green, pink, blue } from "@mui/material/colors";

const useStyles = makeStyles({
  cardBorder: {
    border: (note) => {
      if (note.category === "work") {
        return "1px solid white";
      }
    },
  },
});

export default function NoteCard({ note, handleDelete }) {
  const classes = useStyles(note);
  const darkTheme = useTheme();

  const myStyles = {
    backgroundColor: darkTheme ? "black" : "tomato",
    color: "white",
  };

  const ylow = yellow[700];
  const grn = green[500];
  const bl = blue[500];
  const pnk = pink[500];

  return (
    <div>
      <Card elevation={1} className={classes.cardBorder} style={myStyles}>
        <CardHeader
          avatar={
            <Avatar sx={{ backgroundColor: note.category == "work" ? ylow : note.category == "money" ? grn : note.category == "todos" ? pnk : bl }} className={classes.avatar}>
              {note.category[0].toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutlinedIcon />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
