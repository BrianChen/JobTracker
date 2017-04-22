/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import Applications from './app/components/applications';

export default class JobTracker extends Component {

  constructor(props) {
    super(props);
    const routes = [
      {title: 'Applications', index: 0}
    ]
  }

  render() {
    return (
      <Navigator
        initialRoute={{ title: 'Applications' }}
        renderScene={(route, navigator) => {
          return <Applications title={route.title} navigator={navigator}/>
        }}
      />
    );
  }

  // renderScene(route, navigator) {
  //
  // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('JobTracker', () => JobTracker);
