import { Dimensions, StyleSheet } from 'react-native';

//import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
    linearGradient: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 9
    }
});