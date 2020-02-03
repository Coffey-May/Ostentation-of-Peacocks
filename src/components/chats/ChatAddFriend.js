import React, { useContext } from "react"
import { FriendContext } from "../friends/FriendProvider"
import { UserContext } from"../auth/UserProvider"


export default (props) => {
    const { friends, addFriend } = useContext(FriendContext)
    const { users } = useContext(UserContext)
    const friend = props.match.params.friendId
    const user = users.find(u => u.id === parseInt(friend) )|| {}
    filter through the friends array and see which friends relationships go with the active user
    filter through the found friends and see which userId match the chat userId
    return (
        <section className="friend">
            <h3 className="friend__name">Would you like to add {user.userName}?</h3>

{/* 

      "userId": 2,
      "initiatorId": null,
      "id": 2
*/} 

            <button onClick={
                () => {
                    look in friends array and go through them to make sure that there is not that userID
                    addFriend({
                        initiatorId:parseInt(localStorage.getItem("nutshell_user")),
                        userId: user.id
                    })
                        .then(() => {
                            props.history.push("/chats")
                        })
                }
            }>
                Add Friend
            </button>
            <button onClick={
                () => {
                     {
                            props.history.push("/chats")
                        }
                }
            }>
                No thanks
            </button>

        </section>



    )
}