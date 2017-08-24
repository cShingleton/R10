/**
 Global Shared Styles
**/

import { Platform } from 'react-native';

export const colors = {
    red: '#cf392a',
    mediumGray: '#999999',
    lightGray: '#e6e6e6',
    blue: '#8797D6',
    purple: '#9963ea',
    white: 'white'
};

export const typography = {
    baseSize: 16,
    fontMainLight: 'Montserrat-Light',
    ...Platform.select({
        ios: {
            fontMain: 'Montserrat'
        },
        android: {
            fontMain: 'Montserrat-Regular'
        }
    })
};
