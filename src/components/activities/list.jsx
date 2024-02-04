import React, { useEffect, useState } from 'react';

import { Avatar, Divider, List, ListItem, ListItemText, ListItemAvatar, Typography } from '@mui/material';
import { CALL_TYPES_COLORS } from '../../config';
import { ContactPhone } from '@mui/icons-material';
import moment from 'moment';


// Services
import { fetchActivities } from '../../services/activities/activitiesReader';

export default function Activities() {

	const [ activities, setActivities ] = useState([]); 

	useEffect(() => {
		const activitesService = fetchActivities();

		activitesService.then((result) => {
			setActivities(result);
		});
	}, [])

	return (
    <List sx={{ width: '100%', maxWidth: 360, maxHeight: 400, overflow: 'auto', bgcolor: 'background.paper' }}>
			{ activities.map((activity, index) => (
				<React.Fragment key={`activity_${index}`}>
				<ListItem alignItems='flex-start'>
					<ListItemAvatar>
						<Avatar>
							<ContactPhone style={{color: CALL_TYPES_COLORS[activity.call_type]}}/>
						</Avatar>
					</ListItemAvatar>
					<ListItemText primary={activity.call_type} secondary={
						<React.Fragment>
						<Typography
							sx={{ display: 'inline' }}
							component="span"
							variant="caption"
							color="text.primary"
						>
							From: {activity.from}
							<br />
							{moment(activity.created_at).format('MMMM Do YYYY, h:mm:ss')}
						</Typography>
					</React.Fragment>
					} />
				</ListItem>
				<Divider variant="inset" component="li" />
				</React.Fragment>
			))}
    </List>
  );
}