import { Navigation } from "react-native-navigation";

export const goToMain = () => Navigation.setRoot({
            root: {
                bottomTabs: {
                    id: 'BottomTabsId',
                    children: [
                        {
                            component: {
                                name: 'Main',
                                options: {
                                    bottomTab: {
                                        fontSize: 12,
                                        text: 'Hot News',
                                        icon: require('../assets/images/blaze.png')
                                    }
                                }
                            },
                        },
                        {
                            component: {
                                name: 'PrivacyAndPolicy',
                                options: {
                                    bottomTab: {
                                        text: 'Sign Up',
                                        fontSize: 12,
                                        icon: require('../assets/images/signup.png')
                                    }
                                }
                            },
                        },
                    ],
                }
            }
        });

export const goToLogin = () => Navigation.setRoot({
    root:{
        component:{
            name: 'Login'
        }
    }
});