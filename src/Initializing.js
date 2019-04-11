import React from 'react'
import {View,Text,StyleSheet,AsyncStorage} from 'react-native'
import {styles} from "./Style";
import { goToMain, goToLogin } from './Navigate'
import { USER_KEY } from './config'

export default class Initialising extends React.Component {

    async componentDidMount() {
        try {
            const user = await AsyncStorage.getItem(USER_KEY);
            console.log('user: ', user);
            if (user === null) {
                goToLogin()
            } else {
                goToMain()
            }
        } catch (err) {
            console.log('error: ', err);
            goToLogin()
        }
    }

    render() {
        return (
            <View style={styles.container}>
            </View>
        )
    }
}
