import {createStore,applyMiddleware,combineReducers} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';
import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas/sagas';
import rootReducer from './reducers/Posts/index';

import superagent from 'superagent';
import feathers from 'feathers-client';
import rest from 'feathers-rest/client';

const defaultStore = {};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer,defaultStore, applyMiddleware(sagaMiddleware));
const host ='';
export const app=feathers()
.configure(rest(host).superagent(superagent))
.configure(feathers.hooks())
.configure(feathers.authentication({storage:window.localStorage}));

sagaMiddleware.run(mySaga,app);

export const history = syncHistoryWithStore(browserHistory,store);

export default store;