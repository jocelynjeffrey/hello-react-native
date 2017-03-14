import React from 'react';
import Settings from './assets/components/Settings.js';
import Schedule from './assets/components/Schedule.js';
import Plans from './assets/components/Plans.js';
import base from './assets/styles/baseStyles.js';
import home from './assets/styles/homeStyles.js'

import { StyleSheet, Text, View, AppRegistry, Image } from 'react-native'
import { NativeRouter, Route, Link } from 'react-router-native';

const Home = () =>
    <View style={base.container}>
        <Image
          style={home.imgHeader}
          source={require('./assets/images/home-background.png')}>
            <Text style={base.headline}>
                Tell us what you want to do
            </Text>
        </Image>
        <View style={home.main}>
            <Text>Quick Picks</Text>
            <Text>Trending</Text>
        </View>
    </View>


const RouteConfig = () => (
    <NativeRouter>
        <View style={base.container}>
          <Route exact path="/" component={Home}/>
          <Route path="/schedule" component={Schedule}/>
          <Route path="/plans" component={Plans}/>
          <Route path="/settings" component={Settings}/>
              <View style={base.nav}>
                    <Link
                      to="/"
                      underlayColor='#f0f4f7'
                      style={base.navLink}>
                        <Text style={base.navText}>Home</Text>
                    </Link>
                    <Link
                      to="/schedule"
                      underlayColor='#f0f4f7'
                      style={base.navLink}>
                        <Text style={base.navText}>Schedule</Text>
                    </Link>
                    <Link
                      to="/plans"
                      underlayColor='#f0f4f7'
                      style={base.navLink} >
                        <Text style={base.navText}>My Plans</Text>
                    </Link>
                    <Link
                      to="/settings"
                      underlayColor='#f0f4f7'
                      style={base.navLink} >
                        <Text style={base.navText}>Settings</Text>
                    </Link>
              </View>
        </View>
    </NativeRouter>
)


AppRegistry.registerComponent('HelloFlux', () => RouteConfig);
