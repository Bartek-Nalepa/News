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
            articles: [],
            fooArr: [{priority: 'high', key: 1}, {priority: 'med', key: 5}, {priority: 'low', key: 10}],
            modalVisible: false,
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            title: '',
            note: '',
            when: '',
            photo: '',
        }
    }

    description(colour, item) {
        console.log(item);
        return <View style={{width: '100%', justifyContent: 'center'}}>
            <View>
                <Text style={{fontSize: 20, color: colour}}>Title</Text>
                <Text style={{color: colour}}></Text>
            </View>
        </View>
    }

    renderItem = ({item, index}) => {
        if (item.priority === 'high') {
            return (
                <TouchableOpacity style={styles.listPrioHigh} onPress={() => {
                    this.setState({modalVisible: true})
                }}>
                    <ImageBackground
                        style={styles.fullImage}
                        source={require('../assets/images/minions.jpg')}>
                        {this.description('white',item)}
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

    fetchData = async (error) => {
        try {
            const response = await fetch('http://192.168.1.5:3000/api/articles');
            const json = await response.json();
            console.log(json);
            this.setState({articles: json})
        } catch (error) {
            console.log(error)
        }
    };

    componentDidMount() {
        SplashScreen.hide();
        this.fetchData()
            .catch(err => console.log(err))

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
                    data={this.state.articles}
                    extraData={this.state}
                    renderItem={this.renderItem}
                />
            </View>
        );
    }
}
