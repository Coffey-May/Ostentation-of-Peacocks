// // json-server -p 8088 -w database.json

import React from "react";
import { Route } from "react-router-dom";
import { UserProvider } from "./auth/UserProvider";
import { ArticleProvider } from "./articles/ArticleProvider";
import { FriendProvider } from "./friends/FriendProvider";
import { ChatProvider } from "./chats/ChatProvider";
import ChatList from "./chats/ChatList";
import ChatForm from "./chats/ChatForm";
import { TaskProvider } from "./tasks/TaskProvider";
import ArticleList from "./articles/ArticleList";
import FriendList from "./friends/FriendList";
import TaskList from "./tasks/TaskList";
import ArticleForm from "./articles/ArticleForm";
import FriendForm from "./friends/FriendForm";
import TaskForm from "./tasks/TaskForm";

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
        </UserProvider>
      </TaskProvider>
      <ArticleProvider>
        <Route
          exact
          path="/articles"
          render={props => <ArticleList {...props} />}
        />

        <Route exact path="/" render={props => <ArticleList {...props} />} />

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
            path="/chats"
            render={props => <ChatList {...props} />}
          />
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
            exact
            path="/friends/create"
            render={props => <FriendForm {...props} />}
          />
        </UserProvider>
      </FriendProvider>
    </>
  );
};
