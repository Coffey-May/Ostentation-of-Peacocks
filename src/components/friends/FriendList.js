// this from EmployeeList in Kennels where we list location with the employees at that location


import React, { useContext } from "react"

import { FriendContext } from "./FriendProvider"
<<<<<<< HEAD
import { userContext } from "./UserProvider"
=======
// import { UserContext } from "../auth/UserProvider"

>>>>>>> e35b565bea69b973fbeb49f0eac71247fcbac466
import Friend from "./Friend"

import "./Friend.css"

<<<<<<< HEAD
    const { users } = useContext(userContext)
=======
export default (props) => {
>>>>>>> e35b565bea69b973fbeb49f0eac71247fcbac466

    const { friends, deleteFriend } = useContext(FriendContext)
   // when render friend componnet will 
   
    // console.log(friends)
 
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
                        // const friendsOfActiveUser = friends.filter(friend => activeUser === friend.userName)
                      
                    
                }


            </article>

        </div>
    )

}









<<<<<<< HEAD
// import React, { useContext } from "react"
// import { FriendContext } from "./FriendProvider"
// // import { LocationContext } from "../locations/LocationProvider"
// // import { CustomerContext } from "../customers/CustomerProvider"
// import Friend from "./Friend"
// // import "./Friend.css"
=======

>>>>>>> e35b565bea69b973fbeb49f0eac71247fcbac466





<<<<<<< HEAD

// export default (props) => {
//     const { friends } = useContext(FriendContext)

//     return (
//         <>
//             <h1>Friends</h1>

//             <button onClick={() => props.history.push("/friends/create")}>
//                 Add Friend
//             </button>
//             <div className="friends">

//                 {
//                     friends.map(friend => {
//                         return <Friend key={friend.id} friend={friend} />
//                     })
//                 }
//             </div>
//         </>
//     )
// }


=======
>>>>>>> e35b565bea69b973fbeb49f0eac71247fcbac466







