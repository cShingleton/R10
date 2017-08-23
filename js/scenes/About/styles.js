import { Dimensions, StyleSheet } from 'react-native';
import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
    sceneContain: {
        flex: 1,
        flexDirection: 'column',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
    },
    container: {
        justifyContent: 'center'
    },
    logoContainer: {
        flex: 0.1,
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 20
    },
    descriptionContainer: {
        padding: 20
    },
    subHeader: {
        marginTop: 15,
        marginBottom: 15,
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: typography.fontMain
    },
    text: {
        fontFamily: typography.fontMainLight
    },
    conductHeader: {
        paddingBottom: 20,
        color: colors.purple,
        fontFamily: typography.fontMainLight,
        fontSize: 16
    },
    conductText: {
        paddingBottom: 20,
        fontFamily: typography.fontMainLight
    }
});

// const styles = StyleSheet.create ({
//     container: {
//        flex: 1,
//        justifyContent: 'center',
//        alignItems: 'center',
//        marginTop: 70
//}