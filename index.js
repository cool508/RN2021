/**
 * @format
 */

import react from 'react';
import {AppRegistry} from 'react-native';
import App from './app/App';
import {name as ch4App2} from './app.json';
const MyComponentTest = () => <App />

AppRegistry.registerComponent(ch4App2, () => App);
