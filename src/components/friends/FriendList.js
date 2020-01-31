// this from EmployeeList in Kennels where we list location with the employees at that location


import React, { useContext } from "react"

import { FriendContext } from "./FriendProvider"
import { UserContext } from "../auth/UserProvider"

import Friend from "./Friend"

import "./Friend.css"

export default (props) => {

    const { friends } = useContext(FriendContext)
    // const { users } = useContext(UserContext)
    // const friendGroup1 = friends
    // console.log(friends)
    // const { users } = useContext(userContext)

    const activeUser = localStorage.getItem("nutshell_user")
    // const userGroup = users
    console.log(activeUser)
    // debugger
    // const userGroup = users
    // debugger
    return (



        <div className="friends">
            <h1>Friends</h1>
            <button onClick={() => props.history.push("/friends/create")}>
                Add Friend
            </button>


            <article className="friendList">




                 {


                    friends.map(friend => {
                        const friendsOfActiveUser = friends.filter(friend => parseInt(activeUser) === friend.initiatorId)
                        // const friendsOfActiveUser = friends.filter(friend => activeUser === friend.userName)
                      
                        console.log(friend.initiatorId)
                        console.log(friend.user.userName)
                        
                        console.log(activeUser)
                        console.log(friendsOfActiveUser)
                        
                        // return <Friend key={friend.userName}
                        // return <Friend key={friendsOfActiveUser.userName}
                        // return <Friend key={friendsOfActiveUser.userId}
                        // return <Friend key={friendsOfActiveUser.id}
                        // return <Friend key={friendsOfActiveUser.initiatorId}
                        // return <Friend key={friend.initiatorId}
                        // return <Friend key={friend.initiatorId}
                        // return <Friend key={friend.userId}
                        // return <Friend key={friend.user.Id}
                        // return <Friend key={activeUser}
                            // friend={friendsOfActiveUser}
                              return <Friend key={friend.user.userName}

                            friend={friendsOfActiveUser}
                            // customer={friend}

                        />


                    })
                }



                {/* {


                    friends.filter(friend => {
                        const friendsOfActiveUser = (f => activeUser === f.initiatorId).map
                        // const friendFound = users.find(l => l.id === friend.locationId)

                        return <Friend key={friend.userName}

                            friend={friendsOfActiveUser}
                            customer={friend}

                        />

                    })
                } */}




            </article>



        </div>
    )

}






















