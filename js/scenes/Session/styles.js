import { Dimensions, StyleSheet } from 'react-native';

import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
    sceneContain: {
        flex: 1,
        flexDirection: 'column',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
    },
    descriptionContainer: {
        padding: 20
    },
    subTitle: {
        fontSize: 14,
        fontFamily: typography.fontMain,
        color: colors.mediumGray
    },
    subHeader: {
        marginTop: 15,
        marginBottom: 15,
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: typography.fontMain
    },
    startTime: {
        color: colors.red,
        fontSize: 14,
        fontFamily: typography.fontMain
    },
    description: {
        marginTop: 15,
        fontFamily: typography.fontMainLight,
        fontSize: 16
    },
    presentedText: {
        fontFamily: typography.fontMain,
        color: colors.mediumGray,
        fontSize: 15,
        marginTop: 20
    },
    speakerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 20
    },
    speakerName: {
        fontFamily: typography.fontMain,
        marginLeft: 15
    },
    speakerImage: {
        width: 60, 
        height: 60,
        borderRadius: 30
    },
    subContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    iconHeart: {
        color: colors.red
    }
});