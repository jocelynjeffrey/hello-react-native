import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';
import styles from '../styles/global.js'


const Topic = ({ match }) => (
  <Text>
    {match.params.topicId} and test
  </Text>
)

const Topics = ({ match }) => (
  <View>
    <Text style={styles.header}>Topics</Text>
    <View>
      <Link
        to={`${match.url}/rendering`}
        underlayColor='#f0f4f7'>
          <Text>Rendering with React</Text>
      </Link>
      <Link
        to={`${match.url}/components`}
        underlayColor='#f0f4f7'>
          <Text>Components</Text>
      </Link>
      <Link
        to={`${match.url}/props-v-state`}
        underlayColor='#f0f4f7'>
          <Text>Props v. State</Text>
      </Link>
    </View>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <Text>Please select a topic.</Text>
    )} />
  </View>
)

export default Topics;
