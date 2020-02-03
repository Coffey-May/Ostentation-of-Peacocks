// // json-server -p 8088 -w database.json

import React from "react";
import { Route } from "react-router-dom";
import { UserProvider } from "./auth/UserProvider";
import { ArticleProvider } from "./articles/ArticleProvider";
import { FriendProvider } from "./friends/FriendProvider";
import { ChatProvider } from "./chats/ChatProvider";
import { EventProvider } from "./events/EventProvider";
import ChatList from "./chats/ChatList";
import ChatForm from "./chats/ChatForm";
import { TaskProvider } from "./tasks/TaskProvider";
import ArticleList from "./articles/ArticleList";
import Login from "./auth/Login";
import FriendList from "./friends/FriendList";
import TaskList from "./tasks/TaskList";
import ArticleForm from "./articles/ArticleForm";
import FriendForm from "./friends/FriendForm";
import TaskForm from "./tasks/TaskForm";
import ChatAddFriend from "./chats/ChatAddFriend";
import EventList from "./events/EventList";
import EventForm from "./events/EventForm";



export default props => {
  return (
    <>
      <TaskProvider>
        <UserProvider>
          <Route
            exact
            path="/tasks"
            render={props => <TaskList {...props} />}
          />
          <Route
            path="/tasks/create"
            render={props => <TaskForm {...props} />}
          />
          <Route
            path="/tasks/editTasks/:taskId(\d+)"
            render={props => <TaskForm {...props} />}
          />
        </UserProvider>
      </TaskProvider>

      <EventProvider>
        <Route
          exact
          path="/events"
          render={props => <EventList {...props} />}
        />

        <Route
          exact
          path="/events/create"
          render={props => <EventForm {...props} />}
        />
        <Route
          path="/events/editEvents/:eventId(\d+)"
          render={props => <EventForm {...props} />}
        />
      </EventProvider>


      <ArticleProvider>
        <Route
          exact
          path="/articles"
          render={props => <ArticleList {...props} />}
        />

        <Route
          exact
          path="/articles/create"
          render={props => <ArticleForm {...props} />}
        />
        <Route
          path="/articles/editArticle/:articleId(\d+)"
          render={props => <ArticleForm {...props} />}
        />
      </ArticleProvider>


      <ChatProvider>
        <UserProvider>
          <Route
            exact
            path="/"
            render={props => <ChatList {...props} />}
          />
             <Route exact path="/chats" render={props => <ChatList {...props} />} /> 
          <Route
            exact
            path="/chats/create"
            render={props => <ChatForm {...props} />}
          />
          <Route
            path="/chats/edit/:chatId(\d+)"
            render={props => <ChatForm {...props} />}
          />
        </UserProvider>
      </ChatProvider>


      <FriendProvider>
        <UserProvider>
          <Route
            exact
            path="/friends"
            render={props => <FriendList {...props} />}
          />
          <Route
            path="/friends/create"
            render={props => <FriendForm {...props} />}
          />
          <Route
            exact path="/friends/:friendId(\d+)"
            render={props => <ChatAddFriend {...props} />}
          />
        </UserProvider>
      </FriendProvider>
    </>
  );
};
