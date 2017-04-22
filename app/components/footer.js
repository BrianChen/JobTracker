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

export default class Footer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentComponent: 'Application'
    }
  }

  render() {
    return (
      <View style={styles.footer}>
        <View style={styles.footerContents}>
          <Text style={styles.contentText}>Applications</Text>
        </View>
        <View style={styles.footerContents}>
          <Text style={styles.contentText}>Interviews</Text>
        </View>
        <View style={styles.footerContents}>
          <Text style={styles.contentText}>About</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    display: 'flex',
    height: 80,
    backgroundColor: '#CCCCCC',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerContents: {
    borderColor: 'red',
    flex: 3
  },
  contentText: {
    textAlign: 'center'
  }
})
