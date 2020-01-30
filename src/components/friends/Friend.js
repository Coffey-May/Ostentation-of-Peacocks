import React, { useContext } from "react"
// import { FriendContext } from "./FriendProvider"
// import "./Friend.css"




export default ({ friend }) => (
    <section className="friend">
        <h3 className="friend__name">{friend.name}</h3>
        {/* <div className="employee__location">{location.name}</div> */}
        {/* <div className="location__locationId">Location {loaction.locationId}</div> */}
    
    
    
        <button onClick={
                () => {
                    // deleteFriend(friend)
                    //     .then(() => {
                    //         props.history.push("/friends")
                    //     })
                }
            }>
                Delete Friend
            </button>
    
    </section>



)

