import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from '../styles/global.js'

class Settings extends Component {
  render() {
    return (
      <Text style={styles.header}>
        Settings page
      </Text>
    );
  }
}

export default Settings;
