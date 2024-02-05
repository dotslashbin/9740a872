import axios from 'axios';

import { API_BASE_URL } from '../../config';

async function toggleActivityArchive(callId, isArchive) {
	try {
		const response = await axios.patch(API_BASE_URL + `activities/${callId}`, {
			is_archived: isArchive
		});

		return response.data;

	} catch (error) {
		console.error('Error updating data: ', error.message);
		throw error;		
	}
}

export { toggleActivityArchive };