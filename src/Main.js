import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {styles} from './Style'
export default class Main extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <Text style={styles.instructions}>To get started, edit MAIN.js</Text>
            </View>
        );
    }
}
