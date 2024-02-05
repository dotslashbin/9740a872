import React, { useContext, useEffect, useState } from 'react';

import { Divider, List } from '@mui/material';

// Context
import { ActivitiesContext } from '../../app/activitiesContext';

// Services
import Activity from './listItem';

export default function Activities() {

	const { activities, updateList } = useContext(ActivitiesContext);

	useEffect(() => {
		console.log('#DEBUG .. somehting has changed from the list !!');
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