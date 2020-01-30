import React, { useContext } from "react"
import "./Friend.css"
import { FriendContext } from "./FriendProvider"

export default ({ friend }) => (
    <section className="friend">
        <h3 className="friend__name">
            Friend : {friend.user.userName}
            </h3>
        <div className="animal__breed">Breed: {animal.breed}</div>
        {/* <div className="animal__customer">Customer: {customer.name}</div>
        <div className="animal__location">Location: {location.name}</div> */}

    </section>
)
