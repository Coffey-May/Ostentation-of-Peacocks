
import React, { useContext } from "react"
import {TaskContext } from "./TaskProvider";

export default ({ task, history }) => {
    const { releaseTask } = useContext(TaskContext)
    return(
    <section className="task">
        <h3 className="task__name">
           <div className="task_name">{task.taskName}</div>
           <div className="task_name">{new Date(task.taskETA).toLocaleDateString('en-US')}</div>
           <div className="task_name">{task.userId}</div>
           <input type="checkbox"></input>
           <button className="btn--edit" onClick={() => {
        history.push(`/tasks/editTasks/${task.id}`)
      }}>edit</button>
      <button className="btn--delete"
      onClick={() => {
        // Code to delete animal from database
        releaseTask(task).then(() => {
          history.push("/tasks");
        });
      }}>delete</button>
         
           
           
        </h3>
       
    </section>)}

