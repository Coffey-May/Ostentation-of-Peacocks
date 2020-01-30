

import React, { useContext } from 'react';
import { FriendContext } from './FriendProvider';
import { LocationContext } from '../Location/LocationProvider';
import { UserContext } from '../auth/UserProvider';
import Animal from './Animal';
import './Animals.css';

export default (props) => {
	const { friend } = useContext(FriendContext);
	// const { locations } = useContext(LocationContext);
	const { users } = useContext(UserContext);

	return (
<>
		<h1>Tasks</h1>
        <button onClick={() => props.history.push("/tasks/create")}>
            Add Task
        </button>
		<div className="tasks">
			
		{tasks.map(task => {
			// const location = locations.find(loc => loc.id === friend.taskId) || {}
			const user = users.find(use => use.id === friend.userId) || {}
    return <Animal key={animal.id} animal={animal} Location={location} user={user} />
})}
		</div>
		</>
	);
};
