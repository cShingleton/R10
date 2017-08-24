import { StyleSheet } from 'react-native';
import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
    talkContainer: {
        margin: 10
    },
    time: {
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 5,
        marginBottom: 5,
        fontFamily: typography.fontMain,
        backgroundColor: colors.lightGray
    },
    Title: {
        fontFamily: typography.fontMain,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 5,
        fontSize: 14
    },
    separator: {
        flex: 1,
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#8E8E8E'
    },
    subTitle: {
        fontSize: 12,
        fontFamily: typography.fontMainLight,
        color: colors.mediumGray,
        paddingLeft: 10,
        paddingRight: 5
    },
    subContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    iconHeart: {
        color: colors.red
    }
});
