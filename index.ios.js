import React from 'react';
import Login from './assets/components/Login.js';
import About from './assets/components/About.js';
import Topics from './assets/components/Topics.js';
import GlobalStyles from './assets/styles/global.js';

import { StyleSheet, Text, View, AppRegistry } from 'react-native'
import { NativeRouter, Route, Link } from 'react-router-native';

const Home = () => <Text style={GlobalStyles.header}>Flux</Text>

const RouteConfig = () => (
  <NativeRouter>
    <View style={GlobalStyles.container}>
      <View style={GlobalStyles.nav}>
        <Link
          to="/"
          underlayColor='#f0f4f7'
          style={GlobalStyles.navItem}>
            <Text>Home</Text>
        </Link>
        <Link
          to="/about"
          underlayColor='#f0f4f7'
          style={GlobalStyles.navItem}>
            <Text>About</Text>
        </Link>
        <Link
          to="/topics"
          underlayColor='#f0f4f8'
          style={GlobalStyles.navItem} >
            <Text>Topics</Text>
        </Link>
        <Link
          to="/login"
          underlayColor='#f0f4f7'
          style={GlobalStyles.navItem} >
            <Text>Login</Text>
        </Link>
      </View>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
      <Route path="/login" component={Login}/>
    </View>
  </NativeRouter>
)


AppRegistry.registerComponent('HelloFlux', () => RouteConfig);
