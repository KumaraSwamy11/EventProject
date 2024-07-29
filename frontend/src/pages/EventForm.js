import { useEffect, useState } from "react";
import axios from "axios";
import "./EventForm.css";

function EventForm({ event, onSuccess }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    if (event) {
      setTitle(event.title);
      setDate(event.date);
      setLocation(event.location);
    } else {
      setTitle("");
      setDate("");
      setLocation("");
    }
  }, [event]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const callFormApi = async () => {
    //this is my object which i will be passing in the body of my request to be sent to the backend server
    const payload = {
      title: title,
      date: date,
      location: location,
    };

    try {
      if (event) {
        await axios.put(
          `http://localhost:9000/api/updateEvent/${event._id}`,
          payload
        );
      } else {
        //Now I will create a Post http call using axios
        const response = await axios.post(
          "http://localhost:9000/api/eventUser",
          payload
        );
        console.log(response);
        alert("Event Created Successfully");
      }
      onSuccess();
    } catch (error) {
      console.error("Failed to save Event");
    }
  };

  return (
    <div className="event-container">
      {/* <h2>Create Event</h2> */}
      <h2>{event ? "Edit Event" : "Create Event"}</h2>

      <form className="form">
        <div className="form-inputs">
          <label htmlFor="title">Title:</label>
          <input value={title} onChange={handleTitleChange} />
        </div>
        <div className="form-inputs">
          <label htmlFor="date">Date:</label>
          <input type="date" value={date} onChange={handleDateChange} />
        </div>
        <div className="form-inputs">
          <label htmlFor="location">Location:</label>
          <input value={location} onChange={handleLocationChange} />
        </div>
      </form>
      <button onClick={callFormApi}>Submit</button>
    </div>
  );
}

export default EventForm;
