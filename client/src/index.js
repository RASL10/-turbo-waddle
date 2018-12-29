import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import * as serviceWorker from './serviceWorker';

import App from './components/App';
import rootReducer from './reducers';
import { fetchAllPeople } from './actions/index';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

store.dispatch(fetchAllPeople());

ReactDOM.render(    
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
