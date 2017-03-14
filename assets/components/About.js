import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from '../styles/global.js'

class About extends Component {
  render() {
    return (
      <Text style={styles.header}>
        About
      </Text>
    );
  }
}

export default About;
