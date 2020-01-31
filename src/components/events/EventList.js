import React, { useContext } from "react";
import Event from "./Event";
import "./Event.css";
import { EventContext } from "./EventProvider";

export default (props) => {
  const { events } = useContext(EventContext)

  return (
      <>
          <h1>Events</h1>

          <button onClick={() => props.history.push("/articles/create")}>
              Share Stuff
          </button>
          <div className="events">

              {
                  events.map(event => {
                      return <Event key={event.id} event={event} {...props} />
                  })
              }
          </div>
      </>
  )
}