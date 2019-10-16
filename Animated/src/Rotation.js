import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';

export default class Rotation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: new Animated.Value(0),
    };
  }

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 360,
      duration: 700,
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 0,
        duration: 700,
      }).start();
    });
  };
  render() {
    const rotateInterpolate = this.state.animation.interpolate({
      inputRange: [0, 360],
      outputRange: ['0deg', '360deg'],
    });

    const AnimatedStyles = {
      transform: [
        {
          rotate: rotateInterpolate,
        },
      ],
    };
    return (
      <TouchableWithoutFeedback onPress={this.startAnimation}>
        <Animated.View style={[styles.box, AnimatedStyles]} />
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'rgb(52, 73, 94)',
    width: 50,
    padding: 50,
  },
});
