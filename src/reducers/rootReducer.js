import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';

import preloadedStateReducer from './preloadedStateReducer';
import contactsPageReducer from './contactsPageReducer';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  preloadedState: preloadedStateReducer,
  contacts: contactsPageReducer,
  form: formReducer,
});

export default createRootReducer;
