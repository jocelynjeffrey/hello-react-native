import React from 'react';
import { StyleSheet } from 'react-native';

const baseStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch'
  },
  headline: {
    fontSize: 20,
    marginLeft: 40,
    marginTop: 120,
    color: '#00DED1',
    fontWeight: 'bold',
    textAlign: 'left',
    backgroundColor: 'transparent'
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

export default baseStyles;