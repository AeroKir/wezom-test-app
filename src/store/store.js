import { createStore, compose, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import initialState from './initialState';
import createRootReducer from '../reducers/rootReducer';

const enhancers = [];

export const history = createBrowserHistory();

const composedEnhancers = compose(applyMiddleware(routerMiddleware(history)), ...enhancers);

const store = createStore(createRootReducer(history), initialState, composedEnhancers);

export default store;
