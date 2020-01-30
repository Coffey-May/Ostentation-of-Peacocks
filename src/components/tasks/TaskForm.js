import React, { useContext, useState, useEffect } from "react"
import { TaskContext } from "./TaskProvider"
import { LocationContext } from "../Location/LocationProvider"


export default props => {
    const { locations } = useContext(LocationContext)
    const { addTask, tasks, updateTask } = useContext(TaskContext)
    const [animal, setAnimal] = useState({})

    const editMode = props.match.params.hasOwnProperty("taskId")

    const handleControlledInputChange = (event) => {
        /*
            When changing a state object or array, always create a new one
            and change state instead of modifying current one
        */
        const newTask = Object.assign({}, task)
        newTask[event.target.name] = event.target.value
        setTask(newTask)
    }

    const setDefaults = () => {
        if (editMode) {
            const taskId = parseInt(props.match.params.taskId)
            const selectedTask = tasks.find(t => t.id === userId) || {}
            setTask(selectedTask)
        }
    }

    useEffect(() => {
        setDefaults()
    }, [tasks])

    const constructNewTask = () => {
        const UserId = parseInt(task.userId)

        if (userId === 0) {
            window.alert("Please select a location")
        } else {
            if (editMode) {
                updateTask({
                    id: task.id,
                    name: task.name,
                    task: task.task,
                    userId: userId,
                    
                    userId: parseInt(localStorage.getItem("nutshell_user"))
                })
                    .then(() => props.history.push("/tasks"))
            } else {
                addTask({
                    name: task.name,
                   
                    customerId: parseInt(localStorage.getItem("nutshell_user"))
                })
                    .then(() => props.history.push("/users"))
            }
        }
    }

    return (
        <form className="taskForm">
            <h2 className="taskForm__title">{editMode ? "Update Task" : "Admit Task"}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Task name: </label>
                    <input type="text" name="name" required autoFocus className="form-control"
                        proptype="varchar"
                        placeholder="Task name"
                        defaultValue={user.name}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="user">User: </label>
                    <input type="text" name="breed" required className="form-control"
                        proptype="varchar"
                        placeholder="Animal breed"
                        defaultValue={user.id}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="locationId">Location: </label>
                    <select name="locationId" className="form-control"
                        proptype="int"
                        value={animal.locationId}
                        onChange={handleControlledInputChange}>

                        <option value="0">Select a location</option>
                        {locations.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="treatment">Treatments: </label>
                    <textarea type="text" name="treatment" className="form-control"
                        proptype="varchar"
                        value={animal.treatment}
                        onChange={handleControlledInputChange}>
                    </textarea>
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    constructNewAnimal()
                }}
                className="btn btn-primary">
                {editMode ? "Save Updates" : "Make Reservation"}
            </button>
        </form>
    )
}