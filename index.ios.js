import React from 'react';
import Settings from './assets/components/Settings.js';
import Schedule from './assets/components/Schedule.js';
import Plans from './assets/components/Plans.js';
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
          style={GlobalStyles.navLink}>
            <Text style={GlobalStyles.navText}>Home</Text>
        </Link>
        <Link
          to="/schedule"
          underlayColor='#f0f4f7'
          style={GlobalStyles.navLink}>
            <Text style={GlobalStyles.navText}>Schedule</Text>
        </Link>
        <Link
          to="/plans"
          underlayColor='#f0f4f7'
          style={GlobalStyles.navLink} >
            <Text style={GlobalStyles.navText}>My Plans</Text>
        </Link>
        <Link
          to="/settings"
          underlayColor='#f0f4f7'
          style={GlobalStyles.navLink} >
            <Text style={GlobalStyles.navText}>Settings</Text>
        </Link>
      </View>

      <Route exact path="/" component={Home}/>
      <Route path="/schedule" component={Schedule}/>
      <Route path="/plans" component={Plans}/>
      <Route path="/settings" component={Settings}/>
    </View>
  </NativeRouter>
)


AppRegistry.registerComponent('HelloFlux', () => RouteConfig);
