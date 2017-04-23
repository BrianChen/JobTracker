import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  ListView,
  Modal
} from 'react-native';

import Header from './header';

export default class Dashboard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View>
        <Header title='Dashboard' />
      </View>
    );
  }
}
