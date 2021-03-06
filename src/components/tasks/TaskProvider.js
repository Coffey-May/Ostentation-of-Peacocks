import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const TaskContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const TaskProvider = (props) => {
    // locations holds state, setlocations updates state.
    const [tasks, setTasks] = useState([])

    const getTasks = () => {
        return fetch("http://localhost:8088/tasks")
            .then(res => res.json())
            .then(setTasks)
    }


    const updateTask = task => {
        return fetch(`http://localhost:8088/tasks/${task.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(task)
        })
            .then(getTasks)
    }


    const completeTask = (task, id) => {
        return fetch(`http://localhost:8088/tasks/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(task)
        })
            .then(getTasks)
    }




    const addTask = task => {
        return fetch("http://localhost:8088/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(task)
        })
            .then(getTasks)
    }

    const releaseTask = task => {
        return fetch(`http://localhost:8088/tasks/${task.id}`, {
            method: "DELETE",
         
        })
            .then(getTasks)
    }

    /*
        Load all animals when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getTasks()
    }, [])

    useEffect(() => {
        console.log("****  Task APPLICATION STATE CHANGED  ****")
        console.log( tasks)
    }, [tasks])

    return (
        <TaskContext.Provider value={{
            tasks, addTask, releaseTask, updateTask, completeTask
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}