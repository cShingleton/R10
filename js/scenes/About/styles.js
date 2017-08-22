import { Dimensions, StyleSheet } from 'react-native';

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
    header: {
        flex: 0.1,
        backgroundColor: '#cf392a'
    },
    headerText: {
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
        fontWeight: 'bold'
    },
    conductHeader: {
        paddingBottom: 20,
        color: '#9963ea',
        fontSize: 16
    }
});

// const styles = StyleSheet.create ({
//     container: {
//        flex: 1,
//        justifyContent: 'center',
//        alignItems: 'center',
//        marginTop: 70
//}