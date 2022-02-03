import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import NoteCard from "../components/NoteCard";
import Hero from "../components/Hero/Hero";
import Masonry from "react-masonry-css";

export default function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  const handleDelete = async (id) => {
    await fetch("http://localhost:8000/notes/" + id, {
      method: "DELETE",
    });
    const newNotes = notes.filter((note) => note.id != id);
    setNotes(newNotes);
  };

  const breackpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <>
      <Hero />
      <Container>
        <Masonry breakpointCols={breackpoints} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
          {notes.map((note) => (
            <div key={note.id}>
              <NoteCard note={note} handleDelete={handleDelete} />
            </div>
          ))}
        </Masonry>
      </Container>
    </>
  );
}
