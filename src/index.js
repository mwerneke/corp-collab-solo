// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import rootSaga from './redux/sagas/_root.saga';
// import rootReducer from './redux/reducers/_root.reducer';
// import createSagaMiddleware from '@redux-saga/core';
// import { createStore, applyMiddleware } from 'redux';

// import App from './components/App/App';
// import logger from "redux-logger";


// //Middleware
// const sagaMiddleware = createSagaMiddleware();



// //Reducers for Project
// const store = createStore(
//   rootReducer,
  
//   applyMiddleware(logger, sagaMiddleware)
// );
// sagaMiddleware.run(rootSaga);



// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('react-root'),
// );
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store';

import App from './components/App/App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-root'),
);
