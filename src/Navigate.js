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
                                name: 'Technology',
                                options: {
                                    bottomTab: {
                                        text: 'Technology',
                                        fontSize: 12,
                                        icon: require('../assets/images/ic_technology.png')
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