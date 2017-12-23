import React, { Component } from 'react';
import { AppRegistry,StyleSheet,Text,View,Image } from 'react-native';
//import Home from './Home.js';
import { TabsMenu } from './Navigators.js'

export default class App extends Component {
  render() {
    return (
      <TabsMenu/>
    );
  }
}


// skip this line if using Create React Native App
AppRegistry.registerComponent('App', () => App);
