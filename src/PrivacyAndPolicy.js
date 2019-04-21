import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import {styles} from './Style'

export default class PrivacyAndPolicy extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    // api = async () => {
    //     const response = await fetch('https://pwsz-quiz-api.herokuapp.com/api/tests');
    //     const json = await response.json();
    //     const URL = 'https://pwsz-quiz-api.herokuapp.com/api/test';
    //     const tab = json.map(item => `${URL}/${item.id}`); // map utworzy juz tablice wiec nie deklaruje sie jej
    //     // tab.forEach(async (item2) =>  {
    //     //     const response = await fetch(item2);
    //     //     const json2 = await response.json();
    //     //     // console.log(json2);         //zwroci json x1 (petla x4)
    //     //     this.setState({wholeTest: json2})
    //     // });
    //     var eachJson = [];
    //     for (let i = 0; i < tab.length; i++) {
    //         const response = await fetch(tab[i]);
    //         const json2 = await response.json();
    //         eachJson[i] = json2;
    //     }
    //     this.setState({wholeTest: eachJson, isLoading: false});
    // };


    fetchData = async (error) => {
        const response = await fetch('http://192.168.1.5:3000/api/articles');
        const json = await response.json();
        console.log(json);
        if(error){
            console.log(error)
        }
    };


    render() {
        return (
            <View style={styles.container}>
                <Button
                    onPress={this.fetchData}
                    title={"nom"}/>
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <Text style={styles.instructions}>To get PrivacyAndPolicy, edit PrivacyAndPolicy.js</Text>
            </View>
        );
    }
}
