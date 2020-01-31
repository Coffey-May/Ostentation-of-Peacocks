import React, { useContext, useState, useEffect, useRef } from "react";
import { EventContext } from "./EventProvider";

export default props => {
  const { addEvent, events, editEvents } = useContext(EventContext);
  const [event, setEvents] = useState({});
  const eventTitle = useRef("")
  const eventeURL = useRef("")
  const eventSynopsis = useRef("")

  const editMode = props.match.params.hasOwnProperty("eventId");

  const handleControlledInputChange = event => {
    /*
            When changing a state object or array, always create a new one
            and change state instead of modifying current one
        */
    const newEvent = Object.assign({}, event);
    newEvent[event.target.name] = event.target.value;
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
        date: event.event.dateTime,
        eventLocation: event.eventLocation,
        // postDate: article.postDate,
        userId: parseInt(localStorage.getItem("nutshell_user"))
      }).then(() => props.history.push("/events"));
    } else {
      const date = new Date();
      const currentDate = date.getFullYear().toString() + '-' + (date.getMonth() + 1).toString().padStart(2, 0) +
      '-' + date.getDate().toString().padStart(2, 0);
        addEvent({
            eventName: event.eventName,
            date: event.event.dateTime,
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
          <label htmlFor="Title">Whacha Gonna Learn Us?: </label>
          <input
            type="text"
            name="eventTitle"
            ref={eventName}
            required
            autoFocus
            className="form-control"
            proptype="varchar"
            placeholder="Learn Us"
            defaultValue={event.eventName}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="URL">Learn Ya The Interstate: </label>
          <input 
           type="text" 
           name="eventName" 
           required 
           autoFocus 
           className="form-control"
           ref= {eventLocation}
           proptype="varchar"
           placeholder="Interstate Learnin"
           defaultValue={event.eventLocation}
           onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="Synopsis">Wurds: </label>
          <textarea 
            type="text" 
            name="articleSynopsis" 
            className="form-control"
            ref= {articleSynopsis}
            proptype="varchar"
            placeholder="Too Many Wurds"
            value={event.eventName}
            onChange={handleControlledInputChange}>
          </textarea>
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