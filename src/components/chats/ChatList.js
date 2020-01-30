import React, { useContext } from "react"
import { ChatContext } from "./ChatProvider"
import Chat from "./Chat"
import "./Chat.css"
import { UserContext } from "../auth/UserProvider"



export default props => {
    const { chats } = useContext(ChatContext)
    const { users } = useContext(UserContext)
  
    return (
        <div className="chats">
            <h1>Chats</h1>
            <button onClick={() => props.history.push("/chats/create")}>
                Add Chat
            </button>
            <article className="chatList">
                {chats.map(chat => {
                    const user = users.find(u => u.id === chat.UserId)
                    console.log(luser)
                    return <Chat key={chat.id} 
                    user={user}
                    chat={chat} />})}
            </article>
        </div>
    )
}