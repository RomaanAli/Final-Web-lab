import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Routes from './Routes';
import './index.css';

ReactDOM.render(
 <Provider store={store}>
    <App />
 </Provider>,
 document.getElementById('root')
);


ReactDOM.render(<Routes />, document.getElementById('root'));