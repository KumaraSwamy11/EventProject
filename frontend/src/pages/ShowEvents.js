import { useEffect, useState } from "react";
import axios from "axios";
import EventForm from "./EventForm";
import "./ShowEvents.css";

function ShowEvents() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const fetcAllEvents = async () => {
    const response = await axios.get("http://localhost:9000/api/schdules");
    if (response.data.success === true) {
      setEvents(response.data.data);
    } else {
      alert(response.data.message);
    }
  };

  useEffect(() => {
    fetcAllEvents();
  }, []);

  const updateEvent = (event) => {
    setSelectedEvent(event);
  };

  const handleSuccess = () => {
    fetcAllEvents();
    setSelectedEvent(null);
  };

  const softDeleteEvent = async (id) => {
    const response = await axios.put("http://localhost:9000/api/delete/" + id);

    if (response.status === 200) {
      const newEvents = events.filter((event) => event._id !== id);
      setEvents(newEvents);
    } else {
      alert("Some error while delete the user");
    }
  };

  return (
    <div className="eventlist">
      <h1>Upcoming Schedules</h1>
      {events.map((event) => (
        <div className="events">
          <div className="eventdetails">
            <p>
              <strong>Title:</strong> {event.title}
            </p>
            <p>
              <strong>Date:</strong> {event.date}
            </p>
            <p>
              <strong>Location:</strong> {event.location}
            </p>
          </div>
          <div className="event-actions">
            <button
              onClick={() => updateEvent(event)}
              className="update-button"
            >
              Update
            </button>
            <button
              onClick={() => softDeleteEvent(event._id)}
              className="delete-button"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
      {selectedEvent && (
        <EventForm event={selectedEvent} onSuccess={handleSuccess} />
      )}
    </div>
  );
}

export default ShowEvents;
