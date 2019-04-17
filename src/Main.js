import React, {Component} from 'react';
import {
    Text,
    TouchableHighlight,
    FlatList,
    View,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Modal,
    ScrollView,
    ImageBackground
} from 'react-native';
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

    description(colour) {
        return <View style={{width: '100%', justifyContent: 'center'}}>
            <View>
                <Text style={{fontSize: 20, color: colour}}>Title</Text>
                <Text style={{color: colour}}>Urem politum merge despacito</Text>
            </View>
        </View>
    }

    renderItem = ({item, index}) => {
        if (item.priority === 'high') {
            return (
                <TouchableOpacity style={styles.listPrioHigh} onPress={() => {
                    this.setState({modalVisible: true})}}>
                    <ImageBackground
                        style={styles.fullImage}
                        source={require('../assets/images/minions.jpg')}>
                        {this.description('white')}
                    </ImageBackground>
                </TouchableOpacity>
            )
        } else if (item.priority === 'med') {
            return (
                <TouchableOpacity style={styles.listPrioMed} onPress={() => {
                    this.setState({modalVisible: true})
                }}>
                    <ImageBackground
                        style={styles.imageMed}
                    source={require('../assets/images/minions.jpg')}
                    />
                    {this.description()}
                </TouchableOpacity>
            )
        } else {
            return (
                <TouchableHighlight style={styles.listPrioLow} onPress={() => {
                    this.setState({modalVisible: true})
                }}>
                    {this.description()}
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
