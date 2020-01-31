import React, { useContext } from "react"
import { ArticleContext } from "./ArticleProvider";

export default ({ article, history }) => {
  const { releaseArticle } = useContext(ArticleContext)

  return (
    <section className="ArticleCard">
      <div>Title: {article.articleTitle} </div>
      <div>Synopsis: {article.articleSynopsis} </div>
      <a href="{article.url}">{article.articleURL}</a>
      <div>Date: {article.postDate}</div>
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
