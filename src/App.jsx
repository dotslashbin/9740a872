import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx';
import Layout from './components/layouts/index.jsx';

import { ActivitiesContextProvider } from './app/activitiesContext.js';

function App() {
	return (
		<ActivitiesContextProvider>
			<div className="container">
				<Header />
				<div className="container-view">
					<Layout />
				</div>
			</div>
		</ActivitiesContextProvider>
	);
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));

