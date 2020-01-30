// this from EmployeeList in Kennels where we list location with the employees at that location


import React, { useContext } from "react"
// import { EmployeeContext } from "./EmployeeProvider"
// import { LocationContext } from "../locations/LocationProvider"


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
                                return user.userid === activeUser.Id
                            }
                        )

                        // Pass the matching location to Employee component
                        return <Friend key={user.userid}
                                         friend={foundedFriend}
                                         employee={employee} 
                                         
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











import React, { useContext } from "react"
import { FriendContext } from "./FriendProvider"
// import { LocationContext } from "../locations/LocationProvider"
// import { CustomerContext } from "../customers/CustomerProvider"
import Friend from "./Friend"
// import "./Friend.css"






export default (props) => {
    const { friends } = useContext(FriendContext)

    return (
        <>
            <h1>Friends</h1>

            <button onClick={() => props.history.push("/friends/create")}>
                Add Friend
            </button>
            <div className="friends">

                {
                    friends.map(friend => {
                        return <Friend key={friend.id} friend={friend} />
                    })
                }
            </div>
        </>
    )
}









