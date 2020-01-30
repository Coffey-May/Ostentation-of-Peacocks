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
                updateAnimal({
                    id: animal.id,
                    name: animal.name,
                    breed: animal.breed,
                    locationId: locationId,
                    treatment: animal.treatment,
                    customerId: parseInt(localStorage.getItem("kennel_customer"))
                })
                    .then(() => props.history.push("/animals"))
            } else {
                addAnimal({
                    name: animal.name,
                    breed: animal.breed,
                    locationId: locationId,
                    treatment: animal.treatment,
                    customerId: parseInt(localStorage.getItem("kennel_customer"))
                })
                    .then(() => props.history.push("/animals"))
            }
        }
    }

    return (
        <form className="chatForm">
            <h2 className="chatForm__title">{editMode ? "Update Chat" : "New Chat"}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Animal name: </label>
                    <input type="text" name="name" required autoFocus className="form-control"
                        proptype="varchar"
                        placeholder="Animal name"
                        defaultValue={animal.name}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="breed">Animal breed: </label>
                    <input type="text" name="breed" required className="form-control"
                        proptype="varchar"
                        placeholder="Animal breed"
                        defaultValue={animal.breed}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            
            
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    constructNewAnimal()
                }}
                className="btn btn-primary">
                {editMode ? "Save Updates" : "Make Reservation"}
            </button>
        </form>
    )
}