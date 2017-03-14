import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import base from '../styles/baseStyles.js'

class Settings extends Component {
  render() {
    return (
      <Text style={ base.headline }>
        Settings page
      </Text>
    );
  }
}

export default Settings;
