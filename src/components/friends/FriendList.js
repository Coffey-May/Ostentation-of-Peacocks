

import React, { useContext } from "react"

import { FriendContext } from "./FriendProvider"


import Friend from "./Friend"

import "./Friend.css"

export default (props) => {

    const { friends, deleteFriend } = useContext(FriendContext)

 
    const activeUser = localStorage.getItem("nutshell_user")
   
    console.log(activeUser)
    // debugger
  
    return (



        <div className="friends">
            <h1>Friends</h1>
            <button onClick={() => props.history.push("/friends/create")}>
                Add Friend
            </button>

            <article className="friendList">

                 {
                    friends.filter(friend => parseInt(activeUser) === friend.initiatorId).map(friend => {
                        return <Friend key={friend.id} friend={friend} deleteFriend={deleteFriend}/>
                    })
     
                      
                    
                }


            </article>

        </div>
    )

}






















