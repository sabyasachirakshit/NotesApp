import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

function MyNotes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/notes")
      .then((response) => response.json())
      .then((data) => {
        setNotes(data.notes);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleDeleteNote = (noteIndex) => {
    fetch("http://localhost:3001/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ index: noteIndex }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to delete note.");
        }
      })
      .then((data) => {
        console.log("OK");
      })
      .catch((error) => {
        window.location.reload();
        console.error(error);
      });
  };


  return (
    <div className="notes-screen">
      <h1>Your Notes</h1>
      <div className="notes-div" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {notes.map((note, index) => (
          <div key={index} style={{ display: "flex", gap: "20px" }}>
            <p>{note}</p>
            <Button variant="danger" onClick={() => handleDeleteNote(index)}>
              Delete Note
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyNotes;
