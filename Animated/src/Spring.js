import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Animated,
  Text,
  Easing,
} from 'react-native';

export default class Spring extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: new Animated.Value(1),
    };
  }
  startAnimation = () => {
    Animated.spring(this.state.animation, {
      toValue: 2,
      friction: 2,
      tension: 60,
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 100,
      }).start();
    });
  };
  render() {
    const AnimatedStyle = {
      transform: [
        {
          scale: this.state.animation,
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
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
