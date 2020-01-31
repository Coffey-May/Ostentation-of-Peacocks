import React, { useContext, useState, useEffect, useRef } from 'react';
import { TaskContext } from './TaskProvider';
import { UserContext} from "../auth/UserProvider"

export default (props) => {
	const { addTask, tasks, updateTask } = useContext(TaskContext);
	const [ task, setTask ] = useState({});
    const taskName = useRef("")
	const editMode = props.match.params.hasOwnProperty('taskId');
    
	const handleControlledInputChange = (event) => {
		const newTask = Object.assign({}, task);
		newTask[event.target.name] = event.target.value;
		setTask(newTask);
	};

	const setDefaults = () => {
		if (editMode) {
			const taskId = parseInt(props.match.params.taskId);
			const selectedTask = tasks.find((t) => t.id === taskId) || {};
			setTask(selectedTask);
		}
	};

	useEffect(
		() => {
			setDefaults();
		},
		[ tasks ]
	);

	const constructNewTask = () => {
		if (editMode) {
			updateTask({
				id: task.id,
				userId: task.userId,
				taskText: task.taskName,
				date: Date.now()
			}).then(() => props.history.push('/tasks'));
		} else {
			addTask({
				
				// userId: task.userId,
				taskName: task.taskName,
				date: Date.now(),
				userId: parseInt(localStorage.getItem('nutshell_user'))
			}).then(() => props.history.push('/tasks'));
		}
	};

	return (
		<form className="taskForm">
			<h2 className="taskForm__title">create task
            {editMode ? "edit" : "add"}
            </h2>
			<fieldset>
				<div className="form-group">
					<label htmlFor="name">Task name: </label>
					<input
						type="text"
                        name="taskName"
                        ref={taskName}
						required
						autoFocus
						className="form-control"
						proptype="varchar"
						placeholder="Task name"
						defaultValue={task.taskName}
						onChange={handleControlledInputChange}
					/>
				</div>
			</fieldset>
			<button
				type="submit"
				onClick={(evt) => {
					evt.preventDefault();
					constructNewTask()
				}}
				className="btn btn-primary"
			>
				
				{editMode ? 'Save Tasks' : 'Make Task'}
			</button>{' '}
			
		</form>
	);
};
