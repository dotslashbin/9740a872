import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import { Button, Divider, List } from '@mui/material';

// Context
import { ActivitiesContext } from '../../app/activitiesContext';

// Services
import Activity from './listItem';
import CallDetails from './details';

Activities.propTypes = {
	isArchived: PropTypes.bool
};

export default function Activities({ isArchived }) {

	const[modalOpen, setModalOpen] = useState(false);

	const closeModal = () => {
		setModalOpen(false);
	};

	const { activities, updateList } = useContext(ActivitiesContext);

	return (
		<List sx={{ width: '100%', maxWidth: 360, maxHeight: 400, overflow: 'auto', bgcolor: 'background.paper' }}>
			{ activities.map((activity, index) => activity.is_archived  === isArchived ? (
				<React.Fragment key={`activity_${index}`}>
					<CallDetails callId={activity.id} isOpen={modalOpen} closeModal={closeModal}/>
					<Activity data={activity} updateList={updateList}/>
					<div style={{ textAlign: 'center', cursor: 'pointer'}}>
						<Button variant='link' style={{fontSize: '0.5rem', padding: '4px 8px'}} onClick={() => {setModalOpen(true);}}>see details</Button>
					</div>
					<Divider variant="inset" component="li" />
				</React.Fragment>
			): null )}
		</List>
	);
}