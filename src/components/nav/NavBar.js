import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export default (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Nutshell</Link>
            </li>
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

                {
            localStorage.getItem("active_user")
            ? <li className="navbar__item">
            <Link className="navbar__link"
                to=""
                onClick={e => {
                    e.preventDefault()
                    localStorage.removeItem("active_user")
                    props.history.push("/")
                }}
                >Logout</Link>
            </li>
                : ""
            }
        </ul>
    )
}