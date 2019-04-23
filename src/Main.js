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
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import SplashScreen from "react-native-splash-screen";

// var SQLite = require('react-native-sqlite-storage');
// var db = SQLite.openDatabase({name: 'DataBase.db', createFromLocation: 1});

export default class Main extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            gestureName: '',
            modalVisible: false,
            category: 'news',
            article: [],
            refreshing: false,
            index: 0,
        }
    }

    // saveDataIntoLocalDataBase = async (error) => {
    //     try {
    //         const response = await fetch(`http://192.168.1.5:3000/api/articles`);
    //         const json = await response.json();
    //         this.saveLocalDataBase(json.toString());
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };

    fetchData = async (error) => {
        try {
            const response = await fetch(`http://192.168.1.5:3000/api/articles/category/${this.state.category}`);
            const json = await response.json();
            this.setState({articles: json.reverse()});
        } catch (error) {
            console.log(error)
        }
    };

    componentDidMount() {
        SplashScreen.hide();
        this.fetchData()
            .catch(err => {
                console.log(err);
                // this.fetchLocalDataBase()
            });
        // this.saveDataIntoLocalDataBase();
    }

    // saveLocalDataBase(json) {
    //     const queryForDelete =  `DELETE FROM articles`;
    //     const query = `INSERT INTO articles (json) VALUES (${json})`;
    //     db.executeSql(queryForDelete);
    //     db.executeSql(query);
    // }

    // fetchLocalDataBase() {
    //     db.transaction((tx) => {
    //         tx.executeSql(` SELECT * FROM articles WHERE category = ${this.state.category} ORDER BY published`, [], (tx, results) => {
    //             var len = results.rows.length;
    //             var tab = [];
    //             for (let i = 0; i < len; i++) {
    //                 tab[i] = results.rows.item(i);
    //             }
    //             this.setState({articles: tab});
    //         });
    //     });
    // }

    renderItem = ({item, index}) => {
        if (item.priority === 'high') {
            return (
                <TouchableOpacity style={styles.listPrioHigh} onPress={() => {
                    this.setState({modalVisible: true, article: item, index: index});
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
                    this.setState({modalVisible: true, article: item, index: index})
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
                    this.setState({modalVisible: true, article: item, index: index})
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

    renderModal = (article, index) => {
        const json = new Date(article.published);
        const published = `${json.getFullYear()}/${json.getMonth() + 1}/${json.getDate() + 1}`;
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
                    renderItem={this.renderItem}
                />
            </GestureRecognizer>
        );
    }
}
