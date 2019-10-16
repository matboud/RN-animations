import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Animated,
  Text,
} from 'react-native';

export default class Colors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: new Animated.Value(0),
    };
  }
  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 1500,
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 0,
        duration: 1000,
      }).start();
    });
  };
  render() {
    const boxInterpolation = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ['rgb(241, 196, 15)', 'rgb(230, 126, 34)'],
    });

    const colorInterpolation = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ['rgb(230, 126, 34)', 'rgb(241, 196, 15)'],
    });

    const animatedStyles = {
      backgroundColor: boxInterpolation,
    };

    const textStyles = {
      color: colorInterpolation,
    };

    return (
      <TouchableWithoutFeedback onPress={this.startAnimation}>
        <Animated.View style={[styles.box, animatedStyles]}>
          <Animated.Text style={textStyles}>hello</Animated.Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    // backgroundColor: 'tomato',
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
