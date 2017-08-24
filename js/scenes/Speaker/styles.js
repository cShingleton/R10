import { Dimensions, Platform, StyleSheet } from 'react-native';

import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
    sceneContain: {
        flex: 1,
        flexDirection: 'column',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        backgroundColor: 'black'
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 40
    },
    aboutTitleContainer: {
        alignItems: 'center',
        width: Dimensions.get('window').width / 1.4
    },
    aboutTitle: {
        fontSize: 16,
        fontFamily: typography.fontMain,
        color: colors.white
    },
    crossContainer: {
        marginLeft: 15,
        width: Dimensions.get('window').width / 8
    },
    cross: {
        marginLeft: 15
    },
    speakerImage: {
        width: 100, 
        height: 100,
        borderRadius: 50,
        marginBottom: 20
    },
    speakerContainer: {
        alignItems: 'center',
        backgroundColor: 'white',
        margin: 15,
        borderRadius: 10,
        padding: 20
    },
    speakerName: {
        fontFamily: typography.fontMain,
        fontSize: 22,
        marginBottom: 20
    },
    speakerBio: {
        fontFamily: typography.fontMainLight,
        fontSize: 15
    }
});
