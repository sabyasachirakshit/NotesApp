import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainScreen from "./components/MainScreen";
import Navbar from "./components/Navbar";
import MyNotes from "./components/MyNotes"; // import your new component

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/mynotes" element={<MyNotes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
