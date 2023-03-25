import React, { useState } from "react";
import { Button } from "react-bootstrap";

function MainScreen() {
  const [notes, setNotes] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleClear = () => {
    setNotes("");
  };

  const handleSubmit = () => {
    fetch("http://localhost:3001/text", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ note: notes }),
    })
      .then((response) => {
        if (response.ok) {
          setSuccessMessage("Notes added successfully.");
        } else {
          throw new Error("Failed to add notes.");
        }
      })
      .catch((error) => {
        console.error(error);
        setSuccessMessage("Failed to add notes. Please try again later.");
      });
  };

  return (
    <div
      className="main-screen"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "grey",
      }}
    >
      <div style={{ paddingTop: "20px" }}>
        <textarea
          name="notes-taker"
          id="note"
          cols="80"
          rows="10"
          placeholder="Write your notes here.."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          style={{ resize: "none" }}
        ></textarea>
      </div>
      <div className="buttons">
        <Button variant="success" onClick={handleSubmit}>
          Add Note
        </Button>{" "}
        <Button variant="danger" onClick={handleClear}>
          Clear Note
        </Button>
      </div>
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
}

export default MainScreen;
