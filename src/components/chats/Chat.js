import React, { useContext } from "react"
import "./Chat.css"
import { Link } from "react-router-dom"
import { ChatContext } from "./ChatProvider"

export default ({ chat, history, user }) => {

    

return (

    <section className="chat">
        <h3 className="chat__name">
            <Link to={`/friends/${user.id}`}>
                {/* This above link needs to go to a new page with an add friend component    
             */}
                {user.userEmail}
            </Link>
        </h3>
        <div className="chat__text"> {chat.chatText}</div>
        <div className="chat__date"> {new Date(chat.date).toLocaleDateString('en-US')}</div>
      
        {chat.userId === parseInt(localStorage.getItem("nutshell_user"), 10) ?
        <button onClick={() => {
            history.push(`/chats/edit/${chat.id}`)
        }}>Edit</button>
        : ""
     }


    </section>
)
            }
