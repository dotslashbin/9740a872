import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx';
import Layout from './components/layouts/index.jsx'

function App() {
  return (
    <div className="container">
      <Header />
      <div className="container-view">
        <Layout />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
