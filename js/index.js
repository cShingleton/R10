import React, { Component } from 'react';
import { Provider } from 'react-redux'; 
import {
  NavigationContext,
  NavigationProvider,
  StackNavigation,
} from '@expo/ex-navigation';

import Router from './navigation/routes';
import Store from './redux/store';

const navigationContext = new NavigationContext({
  router: Router,
  store: Store,
});
export default class R10 extends Component {
  render() {
    return (
      <Provider store={Store}>
        <NavigationProvider context={navigationContext}>
          <StackNavigation
            navigationUID="root"
            id="root"
            initialRoute={Router.getRoute('about')}
          />
        </NavigationProvider>
      </Provider>
    );
  }
}
