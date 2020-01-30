// this from EmployeeList in Kennels where we list location with the employees at that location


import React, { useContext } from "react"

import { FriendContext } from "./FriendProvider"
import { UserContext } from "./UserProvider"

import Friend from "./Friend"
import Employee from "./Employee"
// import "./Employees.css"

export default (props) => {
    // const locations = useLocations()
    const { friends } = useContext(FriendContext)

    const { users } = useContext(UserContext)

    return (
        <div className="friends">
            <h1>Friends</h1>
            <button onClick={() => props.history.push("/friends/create")}>
                Add Friend
            </button>
            <article className="friendList">
                {
                    users.map(friend => {
                        // Find the USER aka the FRIEND beibg added with the  matching activeUserId in the Users object
                        const foundedFriend = users.find(
                            (user) => {

                                "nutshell_user"
                                return user.userid === activeUser.Id
                            }
                        )

                        // Pass the matching location to Employee component
                        return <Friend key={user.userid}
                                         friendFound={foundedFriend}
                                         friend={friend} 
                                         
                                         />
                    })
                }
            </article>


            {/* //  old  below
            <article className="employeeList">
                {employees.map(employee => <employee key={employee.id} employee={employee} />)}
            </article> */}
        </div>
    )

    }









//     return (
//         <div className="employees">
//         {
//             // theLocations.map(loc => Location(loc) />)
//             theEmployees.map(loc => <Employee key={loc.id} employee={loc} />)
//         }
//         </div>
//     )
// }



















