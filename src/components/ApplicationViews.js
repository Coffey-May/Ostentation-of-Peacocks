// // json-server -p 8088 -w database.json

import React from "react"
import { Route } from "react-router-dom"
import { Login } from "./auth/Login"
// import { UserProvider } from "./auth/UserProvider"
// import { ArticleProvider } from "./articles/ArticleProvider"
// import { ChatProvider } from "./chat/ChatProvider"
// import { EventProvider } from "./event/EventProvider"
// import { FriendProvider } from "./friend/FriendProvider"
// import { TaskProvider } from "./task/TaskProvider"
// import ArticleList from "./articles/ArticleList"
// import ChatList from "./chats/ChatList"
// import EventList from "./events/EventList"
// import FriendList from "./friends/FriendList"
// import TaskList from "./tasks/TaskList"
// import ArticleForm from "./articles/ArticleForm"
// import ChatForm from './chats/ChatForm'
// import EventForm from "./events/EventForm"
// import FriendForm from './friends/FriendForm'
import TaskForm from './tasks/TaskForm'
// import AnimalDetail from "./animal/AnimalDetail"






export default (props) => {
    return (
        <>
     
               
                <Route exact path="/tasks" render={
                    props => {
                        if (localStorage.getItem("nutshell_user") !== null) {
                            return <TaskForm {...props} />
                        }
                        return <Login {...props} />
                    }
                } />
            



        </>
    )
 }