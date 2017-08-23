import React, { Component } from 'react';
import { Text } from 'react-native';
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem
} from '@expo/ex-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import Router from './routes';
import { colors, typography } from '../config/styles';

const defaultRouteConfig = {
  navigationBar: {
    tintColor: colors.white,
    titleStyle: {
      fontFamily: typography.fontMainLight   
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

  renderTitle(isSelected, title) {
    const titleStyle = {
      color: isSelected ? 'white' : colors.mediumGray,
      fontSize: 10,
      fontFamily: typography.fontMain
    };
    return <Text style={titleStyle}>{title}</Text>;
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
          renderTitle={this.renderTitle}
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
          renderTitle={this.renderTitle}
        >
          <StackNavigation
            id="Maps"
            navigatorUID="Maps"
            initialRoute={Router.getRoute('maps')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </TabItem>

        <TabItem
          id="Faves"
          title="Faves"
          renderIcon={(isSelected) => this.renderIcon('ios-heart', isSelected) }
          renderTitle={this.renderTitle}
        >
          <StackNavigation
            id="Faves"
            navigatorUID="Faves"
            initialRoute={Router.getRoute('faves')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </TabItem>

        <TabItem
          id="About"
          title="About"
          renderIcon={(isSelected) => this.renderIcon('ios-information-circle', isSelected) }
          renderTitle={this.renderTitle}
        >
          <StackNavigation
            id="About"
            navigatorUID="About"
            initialRoute={Router.getRoute('about')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </TabItem>

      </TabNavigation>
    );
  }
}

export default NavigationLayout;
