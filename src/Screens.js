import {Navigation} from "react-native-navigation";
import Main from "./Main";
import Login from "./Login"
import PrivacyAndPolicy from "./PrivacyAndPolicy"
import Initialising from "./Initializing";
import Technology from "./Technology"

export function registerScreens() {
    Navigation.registerComponent('Login', () => Login);
    Navigation.registerComponent('Initializing', () => Initialising);
    Navigation.registerComponent('Main', () => Main);
    Navigation.registerComponent('PrivacyAndPolicy', () => PrivacyAndPolicy);
    Navigation.registerComponent('Technology', () => Technology);
}