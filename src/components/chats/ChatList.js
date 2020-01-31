import React, { useContext } from "react"
import { ChatContext } from "./ChatProvider"
import Chat from "./Chat"
import "./Chat.css"
import { userContext } from "../auth/UserProvider"



export default props => {
    const { chats } = useContext(ChatContext)
    const { users } = useContext(userContext)
    const sortedChats = chats.sort( (a,b) => 
        b.date - a.date)
    
  
    return (
        <div className="chats">
            <h1>Chats</h1>
            <button onClick={() => props.history.push("/chats/create")}>
                Add Chat
            </button>
            <article className="chatList">
                {sortedChats.map(chat => {
                    const user = users.find(u => u.id === chat.userId) || {}

                    return <Chat key={chat.id} 
                    user={user}
                    chat={chat}
                    {...props} />})}
            </article>
        </div>
    )
}