import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Animated,
  Text,
  Easing
} from 'react-native';

export default class MyEasing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: new Animated.Value(0),
    };
  }
  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 220,
      duration: 1000,
      easing: Easing.bounce
    }).start();
  };
  render() {
    const AnimatedStyle = {
      transform: [
        {
          translateY: this.state.animation,
        },
      ],
    };
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
    justifyContent: 'center',
    alignItems: 'center',
  },
});
