import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Card, CardContent, Modal } from '@mui/material';

// Services
import { getCallDetails } from '../../services';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

CallDetails.propTypes = {
	callId:PropTypes.string,
	isOpen:PropTypes.bool, 
	closeModal:PropTypes.func
};

export default function CallDetails({ callId, isOpen, closeModal}) {

	const[call, setCall] = useState(null);

	useEffect(() => {
		getCallDetails(callId).then((result) => {
			setCall(result);
		});

	}, []);

	return(
		call? (
			<Modal
				open={isOpen}
				onClose={closeModal}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Card sx={{ minWidth: 275 }}>
						<CardContent>
							<Typography variant="h5" component="div">
								{ call.direction }
							</Typography>
							<Typography sx={{ mb: 1.5 }} color="text.secondary">
								{ call.call_type }
							</Typography>
							<Typography variant="body2">
									Date: {moment(call.created_at).format('MMMM Do YYYY, h:mm:ss')}
								<br />
									From: { call.from }
								<br />
									To: { call.to }
								<br />
									Duration: { call.duration }
								<br />
									Via: { call.via }
							</Typography>
						</CardContent>
					</Card>
				</Box>
			</Modal>
		):null
	);
}