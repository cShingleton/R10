import React, { Component } from 'react';
import {
  NavigationProvider,
  StackNavigation,
} from '@expo/ex-navigation';

import Router from './navigation/routes';

export default class R10 extends Component {
  render() {
    return (
      <NavigationProvider router={Router}>
        <StackNavigation
          navigationUID="root" 
          id="root" 
          initialRoute={Router.getRoute('schedule')} 
        />
      </NavigationProvider>
    );
  }
}
