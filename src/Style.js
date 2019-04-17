import {StyleSheet} from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    TouchableOpacityDeclaration: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#b3b3ff',
    },
    TextInDeclaration: {
        marginBottom: 4,
        fontSize: 16
    },
    listPrioLow: {
        width: '90%',
        marginLeft: 7,
        marginRight: 7,
        marginBottom: 10,
        height: 100,
        backgroundColor: 'white'
    },
    listPrioMed: {
        width: '80%',
        marginLeft: 7,
        marginRight: 7,
        marginBottom: 10,
        height: 100,
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    listPrioHigh: {
        flex: 1,
        marginBottom: 10,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center'
    },
    fullImage: {
        width: '100%',
        height: 150,
        justifyContent: 'flex-end'
    },
    imageMed: {
        height: 100,
        width: 150,
    },
});
