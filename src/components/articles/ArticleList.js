import React, { useContext } from "react";
import Article from "./Article";
import "./Article.css";
import { ArticleContext } from "./ArticleProvider";

export default (props) => {
  const { articles } = useContext(ArticleContext)

  return (
      <>
          <h1>articles</h1>

          <button onClick={() => props.history.push("/articles/create")}>
              Share Stuff
          </button>
          <div className="articles">

              {
                  articles.map(article => {
                      return <Article key={article.id} article={article} {...props} />
                  })
              }
          </div>
      </>
  )
}