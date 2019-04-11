import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {styles} from './Style'
import SplashScreen from "react-native-splash-screen";
export default class Main extends Component<Props> {

    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount(){
        SplashScreen.hide();
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <Text style={styles.instructions}>To get started, edit MAIN.js</Text>
            </View>
        );
    }
}
