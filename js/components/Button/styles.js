import { Dimensions, StyleSheet } from 'react-native';

import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
    button: {
        width: Dimensions.get('window').width / 1.45,
        height: 40,
        margin: 20,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30
    },
    buttonText: {
        color: colors.white,
        fontFamily: typography.fontMain,
        fontSize: 15,
        backgroundColor: 'transparent'
    }
});
