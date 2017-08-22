import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export const styles = StyleSheet.create({
    talkContainer: {
        margin: 10
    },
    time: {
        paddingLeft: 10,
        marginTop: 5,
        marginBottom: 5
    },
    Title: {
        fontWeight: 'bold',
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 5,
        fontSize: 14
    },
    subTitle: {
        fontSize: 12,
        color: colors.mediumGray,
        paddingLeft: 10,
        paddingRight: 5
    }
});