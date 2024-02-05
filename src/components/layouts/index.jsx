import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

// Components
import Activities from '../activities/list';

export default function Layout() {

	const pages = [
		{ label: 'Activity', value: 'activity', component:(<Activities isArchived={false} />) },
		{ label: 'Achived', value: 'archived', component:(<Activities isArchived={true} />) },
	];

	const [value, setValue] = React.useState('activity');

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: '100%', typography: 'body1' }}>
			<TabContext value={value}>
				<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
					<TabList onChange={handleChange} aria-label="THE MAIN MENU">
						{ pages.map((page, index) => (<Tab key={'tab_' + index} label={page.label} value={page.value} />))}
					</TabList>
				</Box>
				{ pages.map((page, index) => (<TabPanel key={'content_' + index} value={page.value} >{page.component}</TabPanel>))}
			</TabContext>
		</Box>
	);
}