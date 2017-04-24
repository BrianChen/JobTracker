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

export default class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={styles.header}>
        <Text style={styles.title}>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#87CEFA',
    height: 80
  },
  title: {
    paddingTop: 10,
    fontSize: 20,
    fontFamily: 'helvetica neue',
  }

})
