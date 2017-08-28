import { 
    compose, 
    createStore, 
    applyMiddleware 
} from 'redux';
import thunk from 'redux-thunk';
import { createNavigationEnabledStore } from '@expo/ex-navigation';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';

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
    applyMiddleware(thunk),
    autoRehydrate()
  ) // enhancers
);

//persistStore(store, { storage: AsyncStorage });

export default store;
