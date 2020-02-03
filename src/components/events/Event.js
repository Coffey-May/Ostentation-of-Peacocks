import React, { useContext } from "react"
import { EventContext } from "./EventProvider";

export default ({ event, history }) => {
  const { deleteEvent } = useContext(EventContext)
  const isActiveUser = event.userId === parseInt(localStorage.getItem("nutshell_user"), 10) 
  return (
    <section className="EventCard">
      <div className={isActiveUser ? "act_user" : "event_user"}>
      <h3>Event Name: {event.eventName} </h3>
     
      <div className="event_name">Event Details:{event.eventLocation}</div>
      <div className="event_name">Event Date:{ event.eventDate}</div>
      <div className={isActiveUser ? "act_user" : "event_user"}>User:{event.user.userName}</div>
      <button id={isActiveUser ? "act_user" : "event_user"} className="btn--edit" onClick={() => {
        history.push(`/events/editEvents/${event.id}`)
      }}>edit</button>
      <button id={isActiveUser ? "act_user" : "event_user"} className="btn--delete"
      onClick={() => {
        deleteEvent(event).then(() => {
          history.push("/events");
        });
      }}>delete</button>
      </div>
    </section>
  );
};


