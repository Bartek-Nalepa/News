import React, {Component} from 'react';
import {
    Text,
    TouchableHighlight,
    FlatList,
    View,
    RefreshControl,
    TouchableOpacity,
    Modal,
    ScrollView,
    Image,
    ImageBackground
} from 'react-native';
import {styles} from './Style'
import SplashScreen from "react-native-splash-screen";


export default class Main extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            modalVisible: false,
            article: [],
            refreshing: false,
        }
    }

    fetchData = async (error) => {
        try {
            const response = await fetch('http://192.168.1.5:3000/api/articles');
            const json = await response.json();
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

    renderItem = ({item, index}) => {
        if (item.priority === 'high') {
            return (
                <TouchableOpacity style={styles.listPrioHigh} onPress={() => {
                    this.setState({modalVisible: true, article: item});
                }}>
                    <ImageBackground
                        style={styles.imageHigh}
                        source={{uri: item.image}}>
                        {this.description(item, 'white',)}
                    </ImageBackground>
                </TouchableOpacity>
            )
        } else if (item.priority === 'medium') {
            return (
                <TouchableOpacity style={styles.listPrioMed} onPress={() => {
                    this.setState({modalVisible: true,article: item})
                }}>
                    <Image
                        style={styles.imageMed}
                        source={{uri: item.image}}
                    />
                    {this.description(item)}
                </TouchableOpacity>
            )

        } else {
            return (
                <TouchableOpacity style={styles.listPrioLow} onPress={() => {
                    this.setState({modalVisible: true,article: item})
                }}>
                    {this.description(item)}
                </TouchableOpacity>
            )
        }
    };

    description(item, colour,) {
        return <View style={{justifyContent: 'center'}}>
            <View style={{width: "95%"}}>
                <Text style={{fontSize: 18, color: colour}}>{`${item.title.slice(0, 75)}`}...</Text>
            </View>
        </View>
    }

    _onRefresh = () => {
        this.setState({refreshing: true});
        this.fetchData().then(() => {
            this.setState({refreshing: false});
        });
    };

    renderModal = (article) => {
        const json = new Date(article.published);
        const published = `${json.getFullYear()}/${json.getMonth()+1}/${json.getDate()+1}`;
        return <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={this.state.refreshing}
                    onRefresh={this._onRefresh}/>
            }>
            <View>
            <Image
                style={styles.fullImage}
                source={{uri: article.image}}/>
                <Text style={styles.textTitle}>{article.title}</Text>
                <Text style={styles.textDescription}>{article.description}</Text>
            </View>
            <View>
                <Text style={styles.textPublished}>`{`\n\n\n ${published}`}</Text>

            </View>
        </ScrollView>

    };

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
                    {this.renderModal(this.state.article)}
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
