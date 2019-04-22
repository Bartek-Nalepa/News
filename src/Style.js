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
        flex: 1,
        marginLeft: 7,
        marginBottom: 10,
        justifyContent: 'center',
        height: 100,
        backgroundColor: 'white'
    },
    listPrioMed: {
        flex: 1,
        marginBottom: 10,
        height: 100,
        justifyContent: 'center',
        // flexDirection: 'row',
        flexWrap: 'wrap',
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
        height: 300,
        justifyContent: 'flex-end'
    },
    imageHigh:{
        width: '100%',
        height: 150,
        justifyContent: 'flex-end'
    },
    imageMed: {
        height: 100,
        width: '25%'
    },
    textTitle: {
        marginTop: 5,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
    },
    textDescription: {
        marginTop: 5,
        textAlign: 'left',
        fontSize: 17,
    },
    textPublished: {
        fontSize: 14,
        textAlign: 'right',
    },
});
