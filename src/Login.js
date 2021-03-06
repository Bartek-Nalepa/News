import React, {Component} from 'react';
import {Text,ScrollView, View,Modal,TouchableHighlight, TouchableOpacity, Alert} from 'react-native';
import {styles} from './Style'
import RNExitApp from 'react-native-exit-app';
import {goToMain} from './Navigate'
import AsyncStorage from '@react-native-community/async-storage';
import {USER_KEY} from './config';
import SplashScreen from 'react-native-splash-screen';
// var SQLite = require('react-native-sqlite-storage');
// var db = SQLite.openDatabase({name: 'DataBase.db', createFromLocation: 1});
export default class Login extends Component<Props> {


constructor(props){
    super(props);
    this.state={
        modalVisible:false
    }
}

storeData = async () => {
  try {
      await AsyncStorage.setItem(USER_KEY, 'accepted');
      goToMain();
  } catch (error){
console.log('error async')
  }
};

    // createTableDataBase() {
    //     const query = 'CREATE TABLE `articles` ( `json` TEXT )';
    //     db.executeSql(query);
    // }

componentDidMount(){
    SplashScreen.hide();
    // this.createTableDataBase();
}
    render() {
        return (
            <View style={styles.container}>
                <View>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.setState({modalVisible:false});
                    }}>
                    <View style={{marginTop: 22}}>
                        <ScrollView>
                        <View style={{alignItems: 'center'}}>

                            {/*<Text>Hello World!</Text>*/}
                            <Text style={{fontSize: 24}}>Privacy Policy</Text>
                            <Text>Effective date: April 11, 2019</Text>
                            <Text>News ("us", "we", or "our") operates the News mobile application (the "Service").</Text>

                            <Text>This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data. Our Privacy Policy  for News is created with the help of the.</Text>

                            <Text>We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions.</Text>


                            <Text style={{fontSize: 24}}>Information Collection And Use</Text>

                            <Text>We collect several different types of information for various purposes to provide and improve our Service to you.</Text>

                            <Text style={{fontWeight: 'bold',fontSize: 24}}>Types of Data Collected</Text>

                            <Text style={{fontSize: 24}}>Personal Data</Text>

                            <Text>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:</Text>

                            <Text>
                                <Text>Email address</Text><Text>First name and last name</Text><Text>Phone number</Text><Text>Address, State, Province, ZIP/Postal code, City</Text><Text>Cookies and Usage Data</Text>
                            </Text>

                            <Text style={{fontSize: 24}}>Usage Data</Text>

                            <Text>When you access the Service by or through a mobile device, we may collect certain information automatically, including, but not limited to, the type of mobile device you use, your mobile device unique ID, the IP address of your mobile device, your mobile operating system, the type of mobile Internet browser you use, unique device identifiers and other diagnostic data ("Usage Data").</Text>

                            <Text style={{fontSize: 24}}>Tracking & Cookies Data</Text>
                            <Text>We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.</Text>
                            <Text>Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service.</Text>
                            <Text>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</Text>
                            <Text>Examples of Cookies we use:</Text>
                            <Text>
                                <Text>Session Cookies. We use Session Cookies to operate our Service.</Text>
                                <Text>Preference Cookies. We use Preference Cookies to remember your preferences and various settings.</Text>
                                <Text>Security Cookies.We use Security Cookies for security purposes.</Text>
                            </Text>

                            <Text style={{fontSize: 24}}>Use of Data</Text>

                            <Text>News uses the collected data for various purposes:</Text>
                            <Text>
                                <Text>To provide and maintain the Service</Text>
                                <Text>To notify you about changes to our Service</Text>
                                <Text>To allow you to participate in interactive features of our Service when you choose to do so</Text>
                                <Text>To provide customer care and support</Text>
                                <Text>To provide analysis or valuable information so that we can improve the Service</Text>
                                <Text>To monitor the usage of the Service</Text>
                                <Text>To detect, prevent and address technical issues</Text>
                            </Text>

                            <Text style={{fontSize: 24}}>Transfer Of Data</Text>
                            <Text>Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.</Text>
                            <Text>If you are located outside Poland and choose to provide information to us, please note that we transfer the data, including Personal Data, to Poland and process it there.</Text>
                            <Text>Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</Text>
                            <Text>News will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.</Text>

                            <Text style={{fontSize: 24}}>Disclosure Of Data</Text>

                            <Text style={{fontSize: 24}}>Legal Requirements</Text>
                            <Text>News may disclose your Personal Data in the good faith belief that such action is necessary to:</Text>
                            <Text>
                                <Text>To comply with a legal obligation</Text>
                                <Text>To protect and defend the rights or property of News</Text>
                                <Text>To prevent or investigate possible wrongdoing in connection with the Service</Text>
                                <Text>To protect the personal safety of users of the Service or the public</Text>
                                <Text>To protect against legal liability</Text>
                            </Text>

                            <Text style={{fontSize: 24}}>Security Of Data</Text>
                            <Text>The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</Text>

                            <Text style={{fontSize: 24}}>Service Providers</Text>
                            <Text>We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.</Text>
                            <Text>These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</Text>



                            <Text style={{fontSize: 24}}>Links To Other Sites</Text>
                            <Text>Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.</Text>
                            <Text>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</Text>


                            <Text style={{fontSize: 24}}>Children's Privacy</Text>
                            <Text>Our Service does not address anyone under the age of 18 ("Children").</Text>
                            <Text>We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.</Text>


                            <Text style={{fontSize: 24}}>Changes To This Privacy Policy</Text>
                            <Text>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</Text>
                            <Text>We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.</Text>
                            <Text>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</Text>


                            <Text style={{fontSize: 24}}>Contact Us</Text>
                            <Text>If you have any questions about this Privacy Policy, please contact us:</Text>
                            <Text>
                                <Text>By email: kuku55@interia.pl</Text>

                            </Text>

                        </View>
                        </ScrollView>
                    </View>
                </Modal>
                <Text style={styles.welcome}>Did you read and accept ours Privacy and Policy?</Text>
                <TouchableOpacity style={{marginBottom: 10}}
                onPress={()=>{this.setState({modalVisible: true})}}>
                    <Text style={{color: '#80e5ff', textAlign: 'center'}}>Privacy & Policy</Text>
                </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row', }}>
                    <TouchableOpacity style={styles.TouchableOpacityDeclaration} onPress={()=>{
                        RNExitApp.exitApp();
                    }}>
                    <Text style={styles.TextInDeclaration}>Decline</Text>
                    </TouchableOpacity>
                    <View style={{width: 55}}/>
                    <TouchableOpacity style={styles.TouchableOpacityDeclaration} onPress={() => {
                        this.storeData();

                    }}>
                        <Text style={styles.TextInDeclaration}>Accept</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
