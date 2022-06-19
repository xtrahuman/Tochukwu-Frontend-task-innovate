import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
// import thunk from 'redux-thunk';
import dataInfo from './allData/reducer/reducer';

const reducer = combineReducers({
dataInfo,
});

const store = createStore(reducer, applyMiddleware(logger));

export default store;
