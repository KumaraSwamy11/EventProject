import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar";
import EventForm from "./pages/EventForm";
import ShowEvents from "./pages/ShowEvents";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/createEvent" element={<EventForm />} />
          <Route path="/getEvents" element={<ShowEvents />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
