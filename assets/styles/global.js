import React from 'react';
import { StyleSheet } from 'react-native';

const GlobalStyles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 10,
  },
  header: {
    fontSize: 20,
    marginTop: 40,
    textAlign: 'center'
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#292B43'
  },
  navLink: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  navText: {
    color: '#00DED1'
  },
  subNavItem: {
    padding: 5,
  },
  topic: {
    textAlign: 'center',
    fontSize: 15,
  },
  active: {
    color: '#fff',
  },
})

export default GlobalStyles;