import {Navigation} from "react-native-navigation";
import {registerScreens} from "./src/Screens"
var React = require('react-native');
var SQLite = require('react-native-sqlite-storage');
registerScreens();


Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            component: {
                name: 'Initializing'
            }
        }
    });
});

