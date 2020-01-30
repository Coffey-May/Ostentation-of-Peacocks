import React from "react"
import "./Chat.css"
import { Link } from "react-router-dom"

export default ({ chat }) => (
    <section className="chat">
        <h3 className="chat__name">
            <Link to = {`/chats/${chat.id}`}>
            {/* This above link needs to go to a new page with an add friend component    
            I need to expand to get actual name of user not just number */}
            {chat.userId}
            </Link>
            </h3>
        <div className="chat__text"> {chat.chatText}</div>
        

    </section>
)