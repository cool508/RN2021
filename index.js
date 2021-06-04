/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
// basic App
// import App from './app/App';

// Redux App
import App from 'ReduxApp';

import {name as ch4App2} from './app.json';
const MyComponentTest = () => <App />

AppRegistry.registerComponent(ch4App2, () => App);
