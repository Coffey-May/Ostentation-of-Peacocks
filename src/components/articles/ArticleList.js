import React, { useContext } from "react";
import Article from "./Article";
import "./Article.css";
import { ArticleContext } from "./ArticleProvider";
import { FriendContext } from "../friends/FriendProvider";

export default (props) => {
  const { articles } = useContext(ArticleContext)
  const { friends} = useContext(FriendContext)

  let isFriend = false;

  const usersArticles = articles.filter(
    article =>
        article.userId === parseInt(localStorage.getItem("nutshell_user"))
)

  let friendsArticles = []
    friends.map(friend => {
        if (friend.initiatorId === parseInt(localStorage.getItem("nutshell_user"))) {
            articles.filter(
                article => {  
                    if (article.userId === friend.user.id) {
                        friendsArticles.push(article)
                    }
                }
            )
        }
    })

    const combinedArray = usersArticles.concat(friendsArticles)
    const sortedCombinedArray = combinedArray.sort(function(a, b) {
      return new Date(b.date) - new Date(a.date);
    })

    return (
        <section className="ArticlesContainer">
                <h2>Articles</h2>
    
           <button className="btn btn-primary" onClick={() => {
                    props.history.push(`/articles/create`)
                }}>Add Articles</button>
            <div className="ArticlesSection">
          {
            sortedCombinedArray.map(singleArticles => {
              if (singleArticles.userId != parseInt(localStorage.getItem("nutshell_user"))) {
                isFriend = true;
    
              }
                return (
                    <Article props={props} key={singleArticles.id}
                          article={singleArticles}
                          friendStatus={isFriend} />
                )
            })
          }</div>
        </section>
      )

}