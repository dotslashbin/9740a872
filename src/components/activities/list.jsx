import React, { useEffect, useState } from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { ContactPhone } from '@mui/icons-material';


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
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ContactPhone />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
      </ListItem>
    </List>
  );
}