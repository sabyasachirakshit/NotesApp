import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
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

  const deleteAllNotes = () => {
    if (window.confirm("Are you sure you want to delete all notes?")) {
      fetch("http://localhost:3001/deleteallnotes", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            window.location.reload();
          } else {
            throw new Error("Failed to delete notes.");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div className="notes-screen" style={{ paddingLeft: "20px" }}>
      <div
        className="head-section"
        style={{
          display: "flex",
          gap: "20px",
          paddingBottom: "20px",
          paddingTop: "20px",
        }}
      >
        <h1>Your Notes</h1>
        <Button variant="danger" onClick={() => deleteAllNotes()}>
          Delete All Notes
        </Button>
      </div>
      <div
        className="notes-div"
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {loading ? (
          <Skeleton active />
        ) : notes.length === 0 ? (
          <p>No notes available. Try Adding Notes from the Home Screen.</p>
        ) : (
          notes.map((note, index) => (
            <Card key={index} style={{ width: "20%" }}>
              <Card.Body>
                <Card.Text
                  style={{
                    height: "100px",
                    overflow: "auto",
                    whiteSpace: "pre-line",
                  }}
                >
                  {note}
                </Card.Text>
                <Button
                  variant="danger"
                  onClick={() => handleDeleteNote(index)}
                >
                  Delete Note
                </Button>
              </Card.Body>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}

export default MyNotes;
