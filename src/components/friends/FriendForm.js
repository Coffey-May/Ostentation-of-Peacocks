import React, { useContext, useState, useEffect } from "react"
import { FriendContext } from "./FriendProvider"


export default props => {
    const { friends } = useContext(FriendContext)
    const { addFriend, friends, updateFriend } = useContext(FriendContext)
    const [friend, setFriend] = useState({})

    const editMode = props.match.params.hasOwnProperty("friendId")

    const handleControlledInputChange = (event) => {
        /*
            When changing a state object or array, always create a new one
            and change state instead of modifying current one
        */
        const newFriend = Object.assign({}, friend)
        newFriend[event.target.name] = event.target.value
        setFriend(newFriend)
    }

    const setDefaults = () => {
        if (editMode) {
            const friendId = parseInt(props.match.params.FriendId)
            const selectedFriend = friends.find(a => a.id === friendId) || {}
            setFriend(selectedFriend)
        }
    }

    useEffect(() => {
        setDefaults()
    }, [friends])

    const constructNewFriend = () => {
        const locationId = parseInt(friend.locationId)

        if (locationId === 0) {
            window.alert("Please select a location")
        } else {
            if (editMode) {
                updateFriend({
                    id: friend.id,
                    name: friend.name,
                    userId: parseInt(localStorage.getItem("nutshell_user"))
                })
                    .then(() => props.history.push("/Friends"))
            } else {
                addFriend({
                    name: Friend.name,
                    userId: parseInt(localStorage.getItem("nutshell_user"))
                })
                    .then(() => props.history.push("/friends"))
            }
        }
    }

    return (
        <form className="FriendForm">
            <h2 className="FriendForm__title">{editMode ? "Update Friend" : "Admit Friend"}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Future BFF: </label>
                    <input type="text" name="name" required autoFocus className="form-control"
                        proptype="varchar"
                        placeholder="Future BFF"
                        defaultValue={Friend.name}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            
            
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    constructNewFriend()
                }}
                className="btn btn-primary">
                {editMode ? "Save Friend" : "I Can Has BFF"}
            </button>
        </form>
    )
}