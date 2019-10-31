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
import WidthHeightValues from './src/WidthHeightValues';
import HeaderPosition from './src/HeaderPosition';
import Colors from './src/Colors';
import Rotation from './src/Rotation';
import PercentageWH from './src/PercentageWH';
import Easing from './src/Easing';

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
          <View style={[styles.lessonCentered, {height: screenHeight / 3}]}>
            <Opacity />
          </View>

          <Text style={styles.title}>
            2: <Text style={styles.souTitle}>TranslatePosition</Text>.
          </Text>
          <View style={[styles.lessonCentered, {height: screenHeight / 3}]}>
            <TranslatePosition />
          </View>

          <Text style={styles.title}>
            3: <Text style={styles.souTitle}>Scale</Text>.
          </Text>
          <View style={[styles.lessonCentered, {height: screenHeight / 3}]}>
            <Scale />
          </View>

          <Text style={styles.title}>
            4: <Text style={styles.souTitle}>width / height values</Text>.
          </Text>
          <View style={[styles.lessonCentered, {height: screenHeight / 3}]}>
            <WidthHeightValues />
          </View>

          <Text style={styles.title}>
            5: <Text style={styles.souTitle}>Header position</Text>.
          </Text>
          <View style={[styles.lesson, {height: screenHeight / 3}]}>
            <HeaderPosition />
          </View>

          <Text style={styles.title}>
            6: <Text style={styles.souTitle}>colors</Text>.
          </Text>
          <View style={[styles.lessonCentered, {height: screenHeight / 3}]}>
            <Colors />
          </View>

          <Text style={styles.title}>
            7: <Text style={styles.souTitle}> Rotation</Text>.
          </Text>
          <View style={[styles.lessonCentered, {height: screenHeight / 3}]}>
            <Rotation />
          </View>

          <Text style={styles.title}>
            8: <Text style={styles.souTitle}> Percentage w/h</Text>.
          </Text>
          <View style={[styles.lessonCentered, {height: screenHeight / 3}]}>
            <PercentageWH />
          </View>

          <Text style={styles.title}>
            9: <Text style={styles.souTitle}>Easing</Text>.
          </Text>
          <View style={[styles.lesson, {height: screenHeight / 3}]}>
            <Easing />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  lessonCentered: {
    borderWidth: 0.5,
    borderColor: '#95a5a6',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  lesson: {
    borderWidth: 0.5,
    borderColor: '#95a5a6',
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
