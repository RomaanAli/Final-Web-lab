import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import DragonList from './components/DragonList';
import MissionsPage from './components/MissionsPage';


function App() {
 return (
    <Provider store={store}>
      <div className="App">
        <h1>SpaceX Dragons</h1>
        <DragonList />

        <MissionsPage />
      </div>
    </Provider>
 );
}

export default App;
