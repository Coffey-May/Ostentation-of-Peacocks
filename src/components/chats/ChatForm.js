import React, { useContext, useState, useEffect } from "react"
import { ChatContext } from "./ChatProvider"



export default props => {

    const { addChat, chats, updateChat } = useContext(ChatContext)
    const [chat, setChat] = useState({})

    const editMode = props.match.params.hasOwnProperty("chatId")

    const handleControlledInputChange = (event) => {
        /*
            When changing a state object or array, always create a new one
            and change state instead of modifying current one
        */
        const newChat = Object.assign({}, chat)
        newChat[event.target.name] = event.target.value
        setChat(newChat)
    }

    const setDefaults = () => {
        if (editMode) {
            const chatId = parseInt(props.match.params.chatId)
            const selectedChat = chats.find(c => c.id === chatId) || {}
            setChat(selectedChat)
        }
    }

    useEffect(() => {
        setDefaults()
    }, [chats])

    const constructNewChat = () => {
        
        
            if (editMode) {
                updateChat({
                    id: chat.id,
                    userId: chat.userId,
                    chatText: chat.chatText,
                    date: Date.now(),

                })
                    .then(() => props.history.push("/chats"))
            } else {
                addChat({
                    chatText: chat.chatText,
                    userId: parseInt(localStorage.getItem("nutshell_user")),
                    date: Date.now()
                })
                    .then(() => props.history.push("/chats"))
            }
        }
    

    return (
        <form className="chatForm">
            <h2 className="chatForm__title">{editMode ? "Update Chat" : "New Chat"}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="text">What would you like to say? </label>
                    <input type="text" name="chatText" required autoFocus className="form-control"
                        proptype="varchar"
                        placeholder="Chat Away"
                        defaultValue={chat.chatText}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            
            
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    constructNewChat()
                }}
                className="btn btn-primary">
                {editMode ? "Save Updates" : "Post Chat"}
            </button>
        </form>
    )
}