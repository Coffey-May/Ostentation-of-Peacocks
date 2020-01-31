// Added by Adi
import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const ArticleContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const ArticleProvider = (props) => {
    const [articles, setArticles] = useState([])

    const getArticles = () => {
        return fetch("http://localhost:8088/articles")
            .then(res => res.json())
            .then(setArticles)
    }

    const addArticle = article => {
        return fetch("http://localhost:8088/articles", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(article)
        })
            .then(getArticles)
    }

    const releaseArticle = articleId => {
        return fetch(`http://localhost:8088/articles/${articleId}`, {
            method: "DELETE"
        })
            .then(getArticles)
    }

    const editArticle = article => {
        return fetch(`http://localhost:8088/articles/${article.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(article)
        })
        .then(getArticles)
    }

    /*
        Load all Articles when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getArticles()
    }, [])

    useEffect(
    () => {
        console.log("****  Article APPLICATION STATE CHANGED  ****")
        console.log(articles)
    },
    [])

    return (
        <ArticleContext.Provider value={{
            articles, addArticle, releaseArticle, editArticle
        }}>
            {props.children}
        </ArticleContext.Provider>
    )
}