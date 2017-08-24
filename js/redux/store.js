import { 
    compose, 
    createStore, 
    applyMiddleware 
} from 'redux';
import thunk from 'redux-thunk';
import { createNavigationEnabledStore } from '@expo/ex-navigation';

import rootReducer from './reducers'; 

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // definitely enable Redux dev tools!
const createStoreWithNavigation = createNavigationEnabledStore({
  createStore,
  navigationStateKey: 'navigation',
}); 

const store = createStoreWithNavigation(
  rootReducer,
  {}, // initial state
  composeEnhancers(
    applyMiddleware(thunk)
  ) // enhancers
);

export default store;
