

import React, { useContext } from 'react';
import { TaskContext } from './TaskProvider';
// import { LocationContext } from '../Location/LocationProvider';
// import { UserContext } from '../auth/UserProvider';
import Task from './Task';
import './Task.css';

export default (props) => {
	const { tasks } = useContext(TaskContext);
	// // const { locations } = useContext(LocationContext);
	// const { users } = useContext(UserContext);

	return (
<>

		<h1>Tasks</h1>
        <button onClick={() => props.history.push("/tasks/create")}>
            Add Task
        </button>
		<div className="tasks">
			
		{tasks.map(task => {
			// const location = locations.find(loc => loc.id === animal.locationId) || {}
			// const user = users.find(use => use.id === task.userId) || {}
    return <Task {...props} key={task.id} task={task}  />
})}
		</div>
		</>
	);
};

