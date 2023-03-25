import React, { useState } from "react";
import { Button } from "react-bootstrap";

function MainScreen() {
  const [notes, setNotes] = useState("");

  const handleClear = () => {
    setNotes("");
  };

  const handleSubmit = () => {
    // handle submission logic here
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
    </div>
  );
}

export default MainScreen;
