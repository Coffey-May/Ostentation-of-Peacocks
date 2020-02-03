
import React, { useContext } from "react"
import { TaskContext } from "./TaskProvider";

export default ({ task, history }) => {
  const { releaseTask, completeTask } = useContext(TaskContext)
  return (
    <section className="task">
      <h3 className="task__name">
        <div className="task_name">{task.taskName}</div>
        <div className="task_name">{new Date(task.taskETA).toLocaleDateString('en-US')}</div>
        <div className="task_name">{task.userId}</div>


        {/* Below is the original code and logic */}
        {/* <input type="checkbox"></input> */}

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

        {/* Below is the complete task code and logic */}


   <input type="checkbox"></input>
        <button className="btn--complete"

          onClick={() => {
            // Code to delete animal from database
            completeTask(task).then(() => {
              
              history.push("/tasks");
            });
          }}>Complete Task</button>




      </h3>

    </section>)
}


const completeTask = () => {
  
    completeTask({
    
              taskCompletion: true,
    
    },task.id).then(() => props.history.push('/tasks'))