import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export default (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item">
                <Link className="navbar__link" to="/articles">Articles</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/chats">Chats</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/events">Events</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/friends">Friends</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/tasks">Tasks</Link>
            </li>

                {
            localStorage.getItem("nutshell_user")
            ? <li className="navbar__item">
            <Link className="navbar__link"
                to=""
                onClick={e => {
                    e.preventDefault()
                    localStorage.removeItem("nutshell_user")
                    props.history.push("/")
                }}
                >GTFO</Link>
            </li>
                : ""
            }
        </ul>
    )
}