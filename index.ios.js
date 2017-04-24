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

const JobTracker = TabNavigator({
  Dashboard: {screen: Dashboard},
  Applications: {screen: Applications},
  Interviews: {screen: Interviews},
  About: {screen: About}
})

AppRegistry.registerComponent('JobTracker', () => JobTracker);
