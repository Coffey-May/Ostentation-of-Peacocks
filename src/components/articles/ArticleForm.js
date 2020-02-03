import React, { useContext, useState, useEffect, useRef } from "react";
import { ArticleContext } from "./ArticleProvider";

export default props => {
  const { addArticle, articles, editArticle } = useContext(ArticleContext);
  const [article, setArticle] = useState({});
  const articleTitle = useRef("")
  const articleURL = useRef("")
  const articleSynopsis = useRef("")

  const editMode = props.match.params.hasOwnProperty("articleId");

  const handleControlledInputChange = event => {
    /*
            When changing a state object or array, always create a new one
            and change state instead of modifying current one
        */
    const newArticle = Object.assign({}, article);
    newArticle[event.target.name] = event.target.value;
    setArticle(newArticle);
  };

  const setDefaults = () => {
    if (editMode) {
      const articleId = parseInt(props.match.params.articleId);
      const selectedArticle = articles.find(a => a.id === articleId) || {};
      setArticle(selectedArticle);
    }
  };

  useEffect(() => {
    setDefaults();
  }, [articles]);

  const constructNewArticle = () => {
    if (editMode) {
      editArticle({
        id: article.id,
        articleTitle: article.articleTitle,
        articleSynopsis: article.articleSynopsis,
        articleURL: article.articleURL,
        postDate: article.postDate,
        userId: parseInt(localStorage.getItem("nutshell_user"))
      }).then(() => props.history.push("/articles"));
    } else {
      const date = new Date();
      const currentDate = date.getFullYear().toString() + '-' + (date.getMonth() + 1).toString().padStart(2, 0) +
      '-' + date.getDate().toString().padStart(2, 0);
        addArticle({
          articleTitle: article.articleTitle,
          articleSynopsis: article.articleSynopsis,
          articleURL: article.articleURL,
          postDate: new Date(currentDate).toLocaleDateString('en-US'),
          userId: parseInt(localStorage.getItem("nutshell_user"))
        })
            .then(() => props.history.push("/articles"))
    }
  };

  return (
    <form className="articleForm">
      <h2 className="articleForm__title">
        {editMode ? "Bless Ya heart" : "Learn Us"}
      </h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="Title">Whacha Gonna Learn Us?: </label>
          <input
            type="text"
            name="articleTitle"
            ref={articleTitle}
            required
            autoFocus
            className="form-control"
            proptype="varchar"
            placeholder="Learn Us"
            defaultValue={article.articleTitle}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="URL">URL Learn Ya The Interstate: </label>
          <input 
           type="text" 
           name="articleURL" 
           required 
           autoFocus 
           className="form-control"
           ref= {articleURL}
           proptype="varchar"
           placeholder="Interstate Learnin"
           defaultValue={article.articleURL}
           onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="Synopsis">Wurds: </label>
          <textarea 
            type="text" 
            name="articleSynopsis" 
            className="form-control"
            ref= {articleSynopsis}
            proptype="varchar"
            placeholder="Too Many Wurds"
            value={article.articleSynopsis}
            onChange={handleControlledInputChange}>
          </textarea>
        </div>
      </fieldset>

      <button
        type="submit"
        onClick={evt => {
          evt.preventDefault();
          constructNewArticle();
        }}
        className="btn btn-primary"
      >
        {editMode ? "Fix Learnin" : "Save Learnin"}
      </button>
    </form>
  );
};