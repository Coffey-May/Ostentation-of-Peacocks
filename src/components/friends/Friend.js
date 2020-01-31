import React, { useContext } from "react"
import "./Friend.css"
import { FriendContext } from "./FriendProvider"

export default ({ friend, history}) => {
    const { deleteFriend} = useContext(FriendContext)
    return (
    <section className="friend">
        <h3 className="friend__name">
            Friend : {friend.user.userName}
            </h3>
            <button onClick={
                () => {
                    deleteFriend(friend)
                        .then(() => {
                            history.push("/friends")
                        })
                }
            }>
                Delete Friend
            </button>

    </section>
)
}