import React, { useContext } from "react"
import { ArticleContext } from "./ArticleProvider";

export default ({ article, history }) => {
  const { releaseArticle } = useContext(ArticleContext)
  const isActiveUser = article.userId === parseInt(localStorage.getItem("nutshell_user"), 10) 


  return (
    <section className="ArticleCard">
      <div>Title: {article.articleTitle} </div>
      <div>Posted by: {article.user.userName}</div>
      <div>Synopsis: {article.articleSynopsis} </div>
      <a href="{article.url}">{article.articleURL}</a>
      <div>Date: {article.postDate}</div>
      <button id={isActiveUser ? "act_user" : "article_user"} className="btn--edit" onClick={() => {
        history.push(`/events/editEvents/${article.id}`)
      }}>edit</button>
      <button className="btn--edit" onClick={() => {
        history.push(`/articles/editArticle/${article.id}`)
      }}>edit</button>
      <button className="btn--delete"
      onClick={() => {
        // Code to delete animal from database
        releaseArticle(article.id).then(() => {
          history.push("/articles");
        });
      }}>delete</button>
    </section>
  );
};
