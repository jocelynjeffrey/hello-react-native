import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from '../styles/global.js'

class Login extends Component {
  render() {
    return (
      <Text style={styles.header}>
        You've logged in.
      </Text>
    );
  }
}

export default Login;
