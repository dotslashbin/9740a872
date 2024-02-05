import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { Divider, List } from '@mui/material';

// Context
import { ActivitiesContext } from '../../app/activitiesContext';

// Services
import Activity from './listItem';

Activities.propTypes = {
	isArchived: PropTypes.bool
};

export default function Activities({ isArchived }) {

	const { activities, updateList } = useContext(ActivitiesContext);

	return (
		<List sx={{ width: '100%', maxWidth: 360, maxHeight: 400, overflow: 'auto', bgcolor: 'background.paper' }}>
			{ activities.map((activity, index) => activity.is_archived  === isArchived ? (
				<React.Fragment key={`activity_${index}`}>
					<Activity data={activity} updateList={updateList}/>
					<Divider variant="inset" component="li" />
				</React.Fragment>
			): null )}
		</List>
	);
}