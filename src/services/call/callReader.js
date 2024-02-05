import axios from 'axios';

import { API_BASE_URL } from '../../config';

async function getCallDetails(callId) {
	try {
		const response = await axios.get(API_BASE_URL + `activities/${callId}`);

		return response.data;
	} catch (error) {
		console.error('Error fetching call ' + callId, error.message);
		throw error;
	}
}

export { getCallDetails };