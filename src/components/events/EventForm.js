import React, { useContext, useState, useEffect} from "react";
import { EventContext } from "./EventProvider";

export default props => {
  const { addEvent, events, editEvent } = useContext(EventContext);
  const [event, setEvent] = useState({});
  

  const editMode = props.match.params.hasOwnProperty("eventId");

  const handleControlledInputChange = changeEvent => {
    /*
            When changing a state object or array, always create a new one
            and change state instead of modifying current one
        */
    const newEvent = Object.assign({}, event);
    newEvent[changeEvent.target.name] = changeEvent.target.value;
    setEvent(newEvent);
  };

  const setDefaults = () => {
    if (editMode) {
      const eventId = parseInt(props.match.params.eventId);
      const selectedEvent = events.find(e => e.id === eventId) || {};
      setEvent(selectedEvent);
    }
  };

  useEffect(() => {
    setDefaults();
  }, [events]);

  const constructNewEvent = () => {
    if (editMode) {
      editEvent({
        id: event.id,
        eventName: event.eventName,
        date: event.dateTime,
        eventLocation: event.eventLocation,
       
        // userId: parseInt(localStorage.getItem("nutshell_user"))
      }).then(() => props.history.push("/events"));
    } else {


        addEvent({
            eventName: event.eventName,
            eventDate: event.dateTime,
            eventLocation: event.eventLocation,
        //   postDate: new Date(currentDate).toLocaleDateString('en-US'),
          userId: parseInt(localStorage.getItem("nutshell_user"))
        })
            .then(() => props.history.push("/events"))
    }
  };

  return (
    <form className="eventForm">
      <h2 className="eventForm__title">
        {editMode ? "Edit event" : "Make event"}
      </h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="Title">Event Name: </label>
          <input
            type="text"
            name="eventName"
            required
            className="form-control"
            proptype="varchar"
            placeholder="event name"
            defaultValue={event.eventName}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="eventLocation">Event Details:</label>
          <input 
           type="text" 
           name="eventLocation" 
           required 
           className="form-control"
           proptype="varchar"
           placeholder="event info"
           defaultValue={event.eventLocation}
           onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="Date">Event Date: </label>
          <input
            type="date" 
            name="dateTime" 
            className="form-control"
            proptype="varchar"
            placeholder="event date"
            defaultValue={event.dateTime}
            onChange={handleControlledInputChange}>
          </input>
        </div>
      </fieldset>

      <button
        type="submit"
        onClick={evt => {
          evt.preventDefault();
          constructNewEvent();
        }}
        className="btn btn-primary"
      >
        {editMode ? "Edit Event" : "Save Event"}
        
      </button> 
      
    </form>
  );
};