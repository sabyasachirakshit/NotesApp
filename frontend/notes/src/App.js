import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [text, setText] = useState(null);
  useEffect(() => {
    axios
      .get(`http://localhost:3001/res`)
      .then((response) => {
        console.log(response);
        setText(response.data);
      })
      .catch((error) => {
        console.error(error);
        setText(error);
      });
  }, []);

  return <div className="App">{text && text.Name}</div>;
}

export default App;
