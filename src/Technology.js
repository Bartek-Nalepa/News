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
import GestureRecognizer, {swipeDirections} from "react-native-swipe-gestures";

export default class Technology extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            category: 'technology',
            modalVisible: false,
            article: [],
            refreshing: false,
            index: 0,
            gestureName: '',
        }
    }

    fetchData = async (error) => {
        try {
            const response = await fetch(`http://192.168.1.5:3000/api/articles/category/${this.state.category}`);
            const json = await response.json();
            console.log(json);
            this.setState({articles: json.reverse()});
        } catch (error) {
            console.log(error)
        }
    };

    componentDidMount() {
        this.fetchData()
            .catch(err => console.log(err))
    }

    description(item, colour,) {
        return <View style={{justifyContent: 'center'}}>
            <View style={{width: "95%"}}>
                <Text style={{fontSize: 18, color: colour}}>{`${item.title.slice(0, 75)}`}...</Text>
            </View>
        </View>
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

    onSwipeArticle(gestureName, gestureState) {
        const {SWIPE_LEFT, SWIPE_RIGHT,} = swipeDirections;
        this.setState({gestureName: gestureName});
        switch (gestureName) {
            case SWIPE_RIGHT:
                if (this.state.index === 0) console.log('first');
                else this.setState({article: this.state.articles[this.state.index - 1], index: this.state.index - 1});
                break;
            case SWIPE_LEFT:
                if (this.state.index === this.state.articles.length - 1) console.log('first');
                else this.setState({article: this.state.articles[this.state.index + 1], index: this.state.index + 1});
                break;

        }
    }

    render() {

        return (
            <GestureRecognizer onSwipe={(direction, state) => {
                if (this.state.modalVisible) this.onSwipeArticle(direction, state)
            }}
                               style={styles.container}>
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
                    renderItem={this.renderItem}/>
            </GestureRecognizer>
        )
    }
}