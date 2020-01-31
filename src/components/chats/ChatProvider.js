import React, { useState, useEffect } from "react"

export const ChatContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const ChatProvider = (props) => {
    const [chats, setChats] = useState([])

    const getChats = () => {
        return fetch("http://localhost:8088/chats")
            .then(res => res.json())
            .then(setChats)
    }

    const addChat = chat => {
        return fetch("http://localhost:8088/chats", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(chat)
        })
            .then(getChats)
    }
    const deleteChat = chat => {
        return fetch(`http://localhost:8088/chats/${chat.id}`, {
            method: "DELETE"
        })
        .then(getChats)
    }
    const updateChat = chat => {
        return fetch(`http://localhost:8088/chats/${chat.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(chat)
        })
            .then(getChats)
    }

   
    /*
        Load all chats when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getChats()
    }, [])

    useEffect(() => {
        console.log("****  CHAT APPLICATION STATE CHANGED  ****")
    }, [chats])

    return (
        <ChatContext.Provider value={{
            chats, addChat, deleteChat, updateChat
        }}>
            {props.children}
        </ChatContext.Provider>
    )
}