import React from "react"
export default ({ task }) => (
    <section className="task">
        <h3 className="task__name">
           <div className="task_name">{task.taskName}</div>
           <div className="task_name">{task.taskETA}</div>
           <div className="task_name">{task.userId}</div>
         
           
           
        </h3>
       
    </section>)