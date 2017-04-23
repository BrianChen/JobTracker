/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Applications from './app/components/applications';
import Dashboard from './app/components/dashboard';
import Interviews from './app/components/interviews';
import About from './app/components/about';

// export default class JobTracker extends Component {
//   render() {
//     return (
//       <View>
//         <Header title={this.}/>
//       </View>
//     );
//   }
// }

const JobTracker = TabNavigator({
  Dashboard: {screen: Dashboard},
  Applications: {screen: Applications},
  Interviews: {screen: Interviews},
  About: {screen: About}
})

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
