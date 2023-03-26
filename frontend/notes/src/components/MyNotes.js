import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Skeleton } from "antd";

function MyNotes() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/notes")
      .then((response) => response.json())
      .then((data) => {
        setNotes(data.notes);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
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
    <div className="notes-screen" style={{ paddingLeft: "20px" }}>
      <h1>Your Notes</h1>
      <div
        className="notes-div"
        style={{ display: "flex", flexDirection: "column", gap: "20px" }}
      >
        {loading ? (
          <Skeleton active />
        ) : notes.length === 0 ? (
          <p>No notes available. Try Adding Notes from the Home Screen.</p>
        ) : (
          notes.map((note, index) => (
            <div key={index} style={{ display: "flex", gap: "20px" }}>
              <p>{note}</p>
              <Button variant="danger" onClick={() => handleDeleteNote(index)}>
                Delete Note
              </Button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default MyNotes;
