import React, { useEffect, useState } from 'react';

import { Divider, List } from '@mui/material';

// Services
import { fetchActivities } from '../../services';
import Activity from './listItem';

export default function Activities() {

	const [ activities, setActivities ] = useState([]); 

	const updateList = (id, newStatus) => {
		setActivities(activities.map(item => item.id === id
			? { ...item, 'is_archived': newStatus }
			:item
		));

	};

	useEffect(() => {
		const activitesService = fetchActivities();

		activitesService.then((result) => {
			setActivities(result);
		});
	}, []);

	useEffect(() => {
		console.log('#DEBUG .. updated activities');
	}, [activities]);

	return (
		<List sx={{ width: '100%', maxWidth: 360, maxHeight: 400, overflow: 'auto', bgcolor: 'background.paper' }}>
			{ activities.map((call, index) => !call.is_archived ? (
				<React.Fragment key={`activity_${index}`}>
					<Activity data={call} updateList={updateList}/>
					<Divider variant="inset" component="li" />
				</React.Fragment>
			): null )}
		</List>
	);
}