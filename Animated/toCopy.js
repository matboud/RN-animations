import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Animated,
  Text,
  Easing,
} from 'react-native';

export default class MyEasing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: new Animated.Value(0),
    };
  }
  startAnimation = () => {};
  render() {
    const AnimatedStyle = {};
    return (
      <TouchableWithoutFeedback onPress={this.startAnimation}>
        <Animated.View style={[styles.box, AnimatedStyle]}></Animated.View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    alignSelf: 'center',
    backgroundColor: 'tomato',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
