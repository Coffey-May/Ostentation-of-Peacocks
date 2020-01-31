// json-server -p 3003 -w database.json

import React from "react"
import { Route } from "react-router-dom"
import { UserProvider } from "./auth/UserProvider"
import { ArticleProvider } from "./articles/ArticleProvider"
// import { ChatProvider } from "./chat/ChatProvider"
// import { EventProvider } from "./event/EventProvider"
import { FriendProvider } from "./friends/FriendProvider"
// import { TaskProvider } from "./task/TaskProvider"
// import ArticleList from "./articles/ArticleList"
// import ChatList from "./chats/ChatList"
// import EventList from "./events/EventList"
import FriendList from "./friends/FriendList"
// import TaskList from "./tasks/TaskList"
// import ArticleForm from "./articles/ArticleForm"
// import ChatForm from './chats/ChatForm'
// import EventForm from "./events/EventForm"
import FriendForm from './friends/FriendForm'
// import TaskForm from './tasks/TaskForm'
// import AnimalDetail from "./animal/AnimalDetail"
import Login from "./auth/Login"





export default (props) => {
    return (
        <>
    

 

             {/* TEST APPLICATIONSVIEW RENDER!!! */}


 {/* This is Adrians code to render the FriendsForm */}
            {/* <FriendProvider>
                <ArticleProvider>
                    <Route exact path="/friends" render={
                        props => {
                            if (localStorage.getItem("kennel_customer") !== null) {
                                return <FriendList {...props} />
                              
                            }
                            return <Login {...props} />
                         
                        }

                    } />
                    <Route path="/friends/create"
                        render={props => < FriendForm {...props} />}
                    />
                </ArticleProvider>
            </FriendProvider>  */}



{/* This is Elis code to render the FriendList */}
            <FriendProvider>
                <ArticleProvider>
                    <Route exact path="/friends" render={
                        props => {
                            if (localStorage.getItem("kennel_customer") !== null) {
                                return <FriendList {...props} />
                              
                            }
                            return <Login {...props} />
                         
                        }

                    } />
                    <Route path="/friends/create"
                        render={props => < FriendForm {...props} />}
                    />
                </ArticleProvider>
            </FriendProvider> 


       </>
    )
}  