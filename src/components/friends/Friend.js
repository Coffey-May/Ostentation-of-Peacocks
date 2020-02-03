// import React from "react"
import React, { useContext } from "react"
import { UserContext } from "../auth/UserProvider"
import { FriendContext } from "./FriendProvider"
// import { FriendContext } from "./FriendProvider"
// import "./Friend.css"

// const { friends, deleteFriend } = useContext(FriendContext)

// if functions have more than one line of logic - that logic must be wrapped in curly {}
//  and any returns must be explicit
export default ({ friend }) => {
    const { deleteFriend } = useContext(FriendContext)

// deleteFriend was passed from FriendList.js and now can be called as a function 

    // console.log(friend)
    return (
        <section className="friend">
            <h3 className="friend__name">Friend: {friend.user.userName}</h3>



            <button onClick={
                () => {
                    deleteFriend(friend)
                        // .then(() => {
                        //     props.history.push("/friends")
                        // })
                }
            }>
                Delete Friend
            </button>

        </section>



    )
}

