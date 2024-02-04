import React, { useEffect, useState } from 'react';

import { Avatar, Divider, List, ListItem, ListItemText, ListItemAvatar, Typography } from '@mui/material';
import { ContactPhone } from '@mui/icons-material';


// Services
import { fetchActivities } from '../../services/activities/activitiesReader';

export default function Activities() {

	const [ activities, setActivities ] = useState([]); 

	useEffect(() => {
		const activitesService = fetchActivities();

		activitesService.then((result) => {
			console.log("#DEBUG ..", result);
			setActivities(result);
		});
	}, [])

	return (
    <List sx={{ width: '100%', maxWidth: 360, maxHeight: 400, overflow: 'auto', bgcolor: 'background.paper' }}>
			{ activities.map((activity, index) => (
				<React.Fragment>
				<ListItem key={`activity_${index}`} alignItems='flex-start'>
					<ListItemAvatar>
						<Avatar>
							<ContactPhone />
						</Avatar>
					</ListItemAvatar>
					<ListItemText primary={activity.call_type} secondary={
						<React.Fragment>
						<Typography
							sx={{ display: 'inline' }}
							component="span"
							variant="body2"
							color="text.primary"
						>
							Ali Connors
						</Typography>
						{" — I'll be in your neighborhood doing errands this…"}
					</React.Fragment>
					} />
				</ListItem>
				<Divider variant="inset" component="li" />
				</React.Fragment>
			))}
    </List>
  );
}