import React, { useContext } from "react"
import { EventContext } from "./EventProvider";

export default ({ event, history }) => {
  const { deleteEvent } = useContext(EventContext)

  return (
    <section className="EventCard">
      <div>Title: {event.eventName} </div>
      <div>Location: {event.eventLocation} </div>
     
      <div>Date: {event.dateTime}</div>
      <button className="btn--edit" onClick={() => {
        history.push(`/events/editEvent/${event.id}`)
      }}>edit</button>
      <button className="btn--delete"
      onClick={() => {
        // Code to delete animal from database
        deleteEvent(event.id).then(() => {
          history.push("/events");
        });
      }}>delete</button>
    </section>
  );
};