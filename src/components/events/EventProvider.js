import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const EventContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const EventProvider = (props) => {
    const [events, setEvents] = useState([])

    const getEvents = () => {
        return fetch("http://localhost:8088/events?_expand=user")
            .then(res => res.json())
            .then(setEvents)
    }

    const addEvent = event => {
        return fetch("http://localhost:8088/events", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(event)
        })
            .then(getEvents)
    }


// create function to delete the event
    const deleteEvent = event => {
        return fetch(`http://localhost:8088/events/${event.id}`, {
            method: "DELETE"
        })
            .then(getEvents)
    }


    const editEvent = event => {
        return fetch(`http://localhost:8088/events/${event.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(event)
        })
            .then(getEvents)
    }



    /*
        Load all events when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getEvents()
    }, [])

    useEffect(() => {
        console.log("****  EVENT APPLICATION STATE CHANGED  ****")
        // console.log(Events)
    }, [events])



    return (
        <EventContext.Provider value={{
            // rememeber to send the deleteEvent for the DELETE
            // need to send the editEvent for the EDIT
            events, addEvent, deleteEvent, editEvent
        }}>
            {props.children}
        </EventContext.Provider>
    )
}