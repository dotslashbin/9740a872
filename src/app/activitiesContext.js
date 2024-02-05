import React, { createContext, useEffect, useState } from 'react';

const ActivitiesContext = createContext();

// Services
import { fetchActivities } from '../services';


// eslint-disable-next-line react/prop-types
const ActivitiesContextProvider = ({ children }) => {
	const [ activities, setActivities ] = useState([]); 

	const updateList = (id, newStatus) => {
		setActivities(activities.map(item => item.id === id
			? { ...item, 'is_archived': newStatus }
			:item
		));

	};

	useEffect(() => {
		const activitesService = fetchActivities();
		activitesService.then((result) => {
			setActivities(result);
		});
	}, []);


	return (
		<ActivitiesContext.Provider value={{ activities, updateList }}>
			{children}
		</ActivitiesContext.Provider>
	);
};

export { ActivitiesContext, ActivitiesContextProvider };