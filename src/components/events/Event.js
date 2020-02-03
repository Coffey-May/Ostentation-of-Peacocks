import React, { useContext } from "react"
import { EventContext } from "./EventProvider";

export default ({ event, history }) => {
  const { deleteEvent } = useContext(EventContext)
  const isActiveUser = event.userId === parseInt(localStorage.getItem("nutshell_user"), 10) 
  return (
    <section className="EventCard">
      <h3>Event Name: {event.eventName} </h3>
     
      <div className="event_name">Event Details:{event.eventLocation}</div>
      <div className="event_name">Event Date:{ event.eventDate}</div>
      <div className={isActiveUser ? "act_user" : "event_user"}>User:{event.user.userName}</div>
      {/* <div>Date: {event.userId}</div> */}
      <button className="btn--edit" onClick={() => {
        history.push(`/events/editEvents/${event.id}`)
      }}>edit</button>
      <button className="btn--delete"
      onClick={() => {
        deleteEvent(event).then(() => {
          history.push("/events");
        });
      }}>delete</button>
    </section>
  );
};


