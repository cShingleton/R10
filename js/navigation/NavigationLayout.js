import React, { Component } from 'react';
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem
} from '@expo/ex-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import Router from './routes';
import { colors } from '../config/styles';

const defaultRouteConfig = {
  navigationBar: {
    tintColor: 'white',
    titleStyle: {
      // font styling   
    },
    //renderBackground: () => (
      // return linear gradient for component
    //)
  }
};

class NavigationLayout extends Component {

  renderIcon(iconName, isSelected) {
    const color = isSelected ? 'white' : colors.mediumGray;
    return <Icon name={iconName} size={24} color={color} />
  }

  render() {
    return (
      <TabNavigation
        id="main"
        navigatorUID="main"
        initialTab="Schedule"
        tabBarColor='black'
      >
        <TabItem
          id="Schedule"
          title="Schedule"
          renderIcon={(isSelected) => this.renderIcon('ios-calendar', isSelected) }
        >
          <StackNavigation
            id="Schedule"
            navigatorUID="Schedule"
            initialRoute={Router.getRoute('schedule')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </TabItem>

        <TabItem
          id="Maps"
          title="Maps"
          renderIcon={(isSelected) => this.renderIcon('ios-map', isSelected) }
        >
          <StackNavigation
            id="Maps"
            navigatorUID="Maps"
            initialRoute={Router.getRoute('maps')}
          />
        </TabItem>

        <TabItem
          id="Faves"
          title="Faves"
          renderIcon={(isSelected) => this.renderIcon('ios-heart', isSelected) }
        >
          <StackNavigation
            id="Faves"
            navigatorUID="Faves"
            initialRoute={Router.getRoute('faves')}
          />
        </TabItem>

        <TabItem
          id="About"
          title="About"
          renderIcon={(isSelected) => this.renderIcon('ios-information-circle', isSelected) }
        >
          <StackNavigation
            id="About"
            navigatorUID="About"
            initialRoute={Router.getRoute('about')}
          />
        </TabItem>

      </TabNavigation>
    );
  }
}

export default NavigationLayout;
