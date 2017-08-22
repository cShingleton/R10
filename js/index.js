import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import {
  NavigationContext,
  NavigationProvider,
  NavigationStyles,
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
            <StatusBar barStyle="light-content" />
            <StackNavigation
              navigationUID="root"
              id="root"
              initialRoute={Router.getRoute('navigation')}
              defaultRouteConfig={{
                styles: { ...NavigationStyles.SlideVertical }
              }}
            />
        </NavigationProvider>
      </Provider>
    );
  }
}
