import {Navigation} from "react-native-navigation";
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'
import Main from "./Main";

export function registerScreens() {
    Navigation.registerComponent('Main', () => gestureHandlerRootHOC(Main));
}