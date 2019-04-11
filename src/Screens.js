import {Navigation} from "react-native-navigation";
import Main from "./Main";

export function registerScreens() {
    Navigation.registerComponent('Main', () => Main);
}