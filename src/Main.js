import React, {Component} from 'react';
import {Text, TouchableHighlight, FlatList, View, TouchableOpacity, Modal, ScrollView} from 'react-native';
import {styles} from './Style'
import SplashScreen from "react-native-splash-screen";

export default class Main extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            fooArr: [{priority: 'high', key: 1}, {priority: 'med', key: 5}, {priority: 'low', key: 10}],
            modalVisible: false,
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            title: '',
            note: '',
            when: '',
            photo: '',
        }
    }

    renderItem = ({item, index}) => {
        if (item.priority === 'high') {
            return (
                <TouchableHighlight style={styles.listPrioHigh} onPress={() => {
                    this.setState({modalVisible: true})
                }}>
                    <View style={{width: '100%', justifyContent: 'center'}}>
                        <View style={{backgroundColor: 'onyx'}}>
                            <Text style={{fontSize: 20,}}>Title</Text>
                            <Text>Urem politum merge despacito</Text>
                        </View>
                    </View>

                </TouchableHighlight>
            )
        }
        // else if (item.priority === 'med') {
        //     return (
        //         <View>
        //         <TouchableHighlight style={styles.listPrioMed} onPress={() => {
        //             this.setState({modalVisible: true})}}>
        //             <TouchableOpacity >
        //                 <Text>uuuj</Text>
        //             </TouchableOpacity>
        //             <View>
        //
        //             </View>
        //
        //         </TouchableHighlight>
        //         </View>
        //     )
        // }
        else {
            return (
                <TouchableHighlight style={styles.listPrioLow} onPress={() => {
                    this.setState({modalVisible: true})
                }}>
                    <View style={{width: '100%', backgroundColor: 'red'}}>
                        <Text style={{fontSize: 20}}>Title</Text>
                        <Text>Urem politum merge despacito</Text>
                    </View>
                </TouchableHighlight>
            )
        }
    };


    componentDidMount() {
        SplashScreen.hide();
    }

    render() {
        return (
            <View style={styles.container}>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.setState({modalVisible: false});
                    }}>
                    <View style={styles.container}>

                        <Text> uh</Text>
                        <ScrollView>
                            <Text style={{fontSize: 17}}>{this.state.quote}</Text>
                        </ScrollView>
                    </View>
                </Modal>
                <FlatList
                    data={this.state.fooArr}
                    extraData={this.state}
                    renderItem={this.renderItem}
                />
            </View>
        );
    }
}
