import React from "react"
import { Route, Redirect } from "react-router-dom"
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews3"
import "./Nutshell2.css"
import Login from "./auth/Login"
import Register from "./auth/Register"


export default () => (
    <>
        <Route render={() => {
            if (localStorage.getItem("nutshell_user")) {
                return (
                    <>
                        <Route render={props => <NavBar {...props} />} />
                        <Route render={props => <ApplicationViews {...props} />} /> 
                    </>
                )
            } else {
                return <Redirect to="/login" />
            }
        }} />

        <Route path="/login" render={props => <Login {...props} />} />
        <Route path="/register" render={props => <Register {...props} />} />
    </>
)