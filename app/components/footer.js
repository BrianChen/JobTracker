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
      pageTitle: 'Application'
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(pageTitle) {
    this.setState({
      pageTitle
    });
  }

  render() {
    return(
      <View style={styles.footer}>
        <View style={styles.footerContents} onClick={this.handleClick.bind(this, 'Applications')}>
          <Text style={styles.contentText}>Applications</Text>
        </View>
        <View style={styles.footerContents} onClick={this.handleClick.bind(this, 'Interviews')}>
          <Text style={styles.contentText}>Interviews</Text>
        </View>
        <View style={styles.footerContents} onClick={this.handleClick.bind(this, 'About')}>
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
    flex: 3
  },
  contentText: {
    textAlign: 'center'
  }
});
