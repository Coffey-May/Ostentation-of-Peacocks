import React from "react"
import "./Chat.css"
import { Link } from "react-router-dom"

const newFunction = (chat) => {
    if(chat.userId === localStorage.getItem("nutshell_user")){
        //return the button html string
        return `<button onClick={() => {
            props.history.push('/chats/edit/${chat.id}')
        }}>Edit</button>`
    }
    else{
        //return a blank string 
        return ""
    }
}

export default ({ chat, users }) => (
    
    <section className="chat">
        <h3 className="chat__name">
            <Link to = {`/friends/${users.id}`}>
            {/* This above link needs to go to a new page with an add friend component    
             */}
            {users.userName}
            </Link>
            </h3>
        <div className="chat__text"> {chat.chatText}</div>
       {newFunction(chat)}
        

    </section>
)