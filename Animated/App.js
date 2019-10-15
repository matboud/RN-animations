/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
} from 'react-native';
import Opacity from './src/Opacity';
import TranslatePosition from './src/TranslatePosition';
import Scale from './src/Scale';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const screenHeight = Math.round(Dimensions.get('window').height);
    const screenWidth = Math.round(Dimensions.get('window').width);

    return (
      <SafeAreaView style={{backgroundColor: '#ecf0f1', height: screenHeight}}>
        <ScrollView>
          <Text style={styles.title}>
            1: <Text style={styles.souTitle}>Opacity blink</Text>.
          </Text>
          <View style={[styles.lesson, {height: screenHeight / 3}]}>
            <Opacity />
          </View>

          <Text style={styles.title}>
            2: <Text style={styles.souTitle}>TranslatePosition</Text>.
          </Text>
          <View style={[styles.lesson, {height: screenHeight / 3}]}>
            <TranslatePosition />
          </View>

          <Text style={styles.title}>
            3: <Text style={styles.souTitle}>Scale</Text>.
          </Text>
          <View style={[styles.lesson, {height: screenHeight / 3}]}>
            <Scale />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  lesson: {
    borderWidth: 0.5,
    borderColor: '#2c3e50',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 17,
    fontWeight: '500',
    color: '#34495e',
    paddingTop: 23,
    paddingBottom: 5,
    paddingLeft: 12,
  },
  souTitle: {
    color: '#3498db',
  },
});
