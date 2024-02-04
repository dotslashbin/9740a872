import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Avatar, Button, ListItem, ListItemText, ListItemAvatar, Typography } from '@mui/material';

import { CALL_TYPES_COLORS } from '../../config';
import { ContactPhone } from '@mui/icons-material';
import moment from 'moment';

// Services
import { toggleActivityArchive } from '../../services';

Activity.propTypes = {
	data: PropTypes.object,
	updateList: PropTypes.func 
};

export default function Activity({data, updateList}) {

	// const updateList = updateList;

	const[activity] = useState(data);

	const toggleArchive = () => {	
		const newStatus = !activity.is_archived;
		toggleActivityArchive(activity.id, newStatus).then((result) => {
			updateList(activity.id, newStatus);
		});
	};

	return(
		<React.Fragment>
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
							<br />
						</Typography>
					</React.Fragment>
				} />

				<Button variant='contained' style={{fontSize: '0.5rem', padding: '4px 8px'}} onClick={() => {toggleArchive();}}>Archive</Button>

			</ListItem>
		</React.Fragment>
	);
}