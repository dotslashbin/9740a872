import axios from 'axios';

import { API_BASE_URL } from '../../config'

async function fetchActivities(params) {
	try {
		const response = await axios.get(API_BASE_URL + '/activities');
		
		return response.data;

	} catch (error) {
		console.error('Error fetching data: ', error.message);
		throw error;
	}	
}

export { fetchActivities }
