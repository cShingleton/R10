import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import {
  DrawerNavigation,
  DrawerNavigationItem,
  StackNavigation
} from '@expo/ex-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

import Router from './routes';
import { colors, typography } from '../config/styles';

const defaultRouteConfig = {
  navigationBar: {
    tintColor: colors.white,
    titleStyle: {
      fontFamily: typography.fontMainLight
    },
    renderBackground: function renderBkGrnd() {
      return <LinearGradient
        start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
        colors={[colors.red, colors.purple]}
        style={StyleSheet.absoluteFill}
      />
    }
  }
};

class NavigationLayout extends Component {

  renderIcon(iconName, isSelected) {
    const color = isSelected ? colors.purple : colors.mediumGray;
    return <Icon name={iconName} size={26} color={color} />
  }

  renderTitle(title, isSelected) {
    const titleStyle = {
      color: isSelected ? colors.purple : colors.mediumGray,
      fontSize: 18,
      fontFamily: typography.fontMain,
      marginLeft: 15
    };
    return <Text style={titleStyle}>{title}</Text>;
  }

  render() {
    return (
      <DrawerNavigation
        id="main"
        navigatorUID="main"
        initialItem="Schedule"
        drawerWidth={225}
      >
        <DrawerNavigationItem
          id="Schedule"
          title="Schedule"
          renderIcon={(isSelected) => this.renderIcon('md-calendar', isSelected)}
          renderTitle={(isSelected) => this.renderTitle('Schedule', isSelected)}
        >
          <StackNavigation
            id="Schedule"
            navigatorUID="Schedule"
            initialRoute={Router.getRoute('schedule')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </DrawerNavigationItem>

        <DrawerNavigationItem
          id="Maps"
          title="Maps"
          renderIcon={(isSelected) => this.renderIcon('md-map', isSelected)}
          renderTitle={(isSelected) => this.renderTitle('Maps', isSelected)}
        >
          <StackNavigation
            id="Maps"
            navigatorUID="Maps"
            initialRoute={Router.getRoute('maps')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </DrawerNavigationItem>

        <DrawerNavigationItem
          id="Faves"
          title="Faves"
          renderIcon={(isSelected) => this.renderIcon('md-heart', isSelected)}
          renderTitle={(isSelected) => this.renderTitle('Faves', isSelected)}
        >
          <StackNavigation
            id="Faves"
            navigatorUID="Faves"
            initialRoute={Router.getRoute('faves')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </DrawerNavigationItem>

        <DrawerNavigationItem
          id="About"
          title="About"
          renderIcon={(isSelected) => this.renderIcon('md-information-circle', isSelected)}
          renderTitle={(isSelected) => this.renderTitle('About', isSelected)}
        >
          <StackNavigation
            id="About"
            navigatorUID="About"
            initialRoute={Router.getRoute('about')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </DrawerNavigationItem>

      </DrawerNavigation>
    );
  }
}

export default NavigationLayout;
