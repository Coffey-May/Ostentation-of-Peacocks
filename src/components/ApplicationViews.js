// // json-server -p 8088 -w database.json

import React from "react"
import { Route } from "react-router-dom"
import { UserProvider } from "./auth/UserProvider"
import { ArticleProvider } from "./articles/ArticleProvider"
// import { ChatProvider } from "./chat/ChatProvider"
// import { EventProvider } from "./event/EventProvider"
import { FriendProvider } from "./friends/FriendProvider"
// import { TaskProvider } from "./task/TaskProvider"
import { ChatProvider } from "./chats/ChatProvider"
import { UserProvider } from "./auth/UserProvider"

// import { ArticleProvider } from "./articles/ArticleProvider"
// import { ChatProvider } from "./chats/ChatProvider"
// import { EventProvider } from "./events/EventProvider"
// import { FriendProvider } from "./friends/FriendProvider"
// import { TaskProvider } from "./tasks/TaskProvider"
// import ArticleList from "./articles/ArticleList"
import ChatList from "./chats/ChatList"
// import EventList from "./events/EventList"
// import FriendList from "./friends/FriendList"
// import TaskList from "./tasks/TaskList"
// import ArticleForm from "./articles/ArticleForm"
import ChatForm from './chats/ChatForm'
// import { UserProvider } from "./auth/UserProvider"

// import { ChatProvider } from "./chat/ChatProvider"
// import { EventProvider } from "./event/EventProvider"
// import { FriendProvider } from "./friend/FriendProvider"
import { TaskProvider } from "./tasks/TaskProvider"
import ArticleList from "./articles/ArticleList"
import Login from "./auth/Login"
// import ChatList from "./chats/ChatList"
// import EventList from "./events/EventList"
import FriendList from "./friends/FriendList"
// import TaskList from "./tasks/TaskList"
// import FriendList from "./friends/FriendList"
import TaskList from "./tasks/TaskList"
import ArticleForm from "./articles/ArticleForm"
// import ChatForm from './chats/ChatForm'
// import EventForm from "./events/EventForm"
// import FriendForm from './friends/FriendForm'
import TaskForm from './tasks/TaskForm'








export default (props) => {
    return (
        <>
    
<TaskProvider>
    <UserProvider>
    <Route exact path="/tasks"
                            render={props => < TaskList {...props} />}
                        />
                         <Route path="/tasks/create" render={
                            props => <TaskForm {...props} />
                        } />
                        {/* <Route path="/tasks/edit/:taskId(\d+)" render={
                            props => <TaskForm {...props} />
                        } /> 
         */}
    </UserProvider>
</TaskProvider>
        
            
    <ArticleProvider>
            <Route exact path="/articles" render={
                    props => {
                        if (localStorage.getItem("nutshell_user") !== null) {
                            return <ArticleList {...props} />
                        }
                        return <Login {...props} />
                    }
                } />
            <Route exact path="/" render={
                    props => {
                        if (localStorage.getItem("nutshell_user") !== null) {
                            return <ArticleList {...props} />
                        }
                        return <Login {...props} />
                    }
                } />
            <Route exact path="/articles/create"
              render={props => <ArticleForm {...props} />}
            />
            <Route
              path="/articles/editArticle/:articleId(\d+)"
              render={props => <ArticleForm {...props} />}
            />
            </ArticleProvider> 
        <ChatProvider>
            <UserProvider>
            <Route exact path="/chats" render={
                            props => <ChatList {...props} />
                        } />
            <Route exact path="/chats/create" render={
                        props => <ChatForm {...props} />
                        } />
            <Route path="/chats/edit/:chatId(\d+)" render={
                            props => <ChatForm {...props} />
                        } />
            </UserProvider>
            
        </ChatProvider>


{/* 
//             {/* <EventProvider>
//                 <ArticleProvider>
//                     <UserProvider>
//                         <Route exact path="/events" render={
//                             props => {
//                                 if (localStorage.getItem("nutshell_user") !== null) {
//                                     return <EventList {...props} />
//                                 }
//                                 return <Login {...props} />
//                             }
//                         } />
//                         <Route path="/events/create"
//                             render={props => < EventForm {...props} />}
//                         />
//                         <Route path="/evenets/:eventId(\d+)" render={
//                             props => <EventDetail {...props} />
//                         } />
//                         <Route path="/events/edit/:eventId(\d+)" render={
//                             props => <EventForm {...props} />
//                         } /> */}

{/* 
{/* //                     </UserProvider> */}
{/* //                 </ArticleProvider> */}
{/* //             </EventProvider> */} */} */}






            



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
            </FriendProvider> */} */}

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
