import registerServiceWorker from './registerServiceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { injectGlobal } from 'styled-components';

import App from './components/App';
// import reducers from './reducers';

injectGlobal`
  body {
    background-color: #fafafa;
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
`;

const store = createStore(() => {}, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
