import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Animated,
  Easing
} from 'react-native';

export default class PercentageWH extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: new Animated.Value(0),
    };
  }

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 1,
      timing: 100,
    //   easing: Easing.back(2),
    //   easing: Easing.bounce,
    //   easing: Easing.elastic(3),
      easing: Easing.bezier(.06, 1,.86,.23),
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 0,
        timing: 100,
      }).start();
    });
  };
  render() {
    const widthInterpolate = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ['25%', '40%'],
    });

    const heightInterpolate = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ['25%', '40%'],
    });

    const animatedStyles = {
      width: widthInterpolate,
      height: heightInterpolate,
    };
    return (
      <TouchableWithoutFeedback onPress={this.startAnimation}>
        <Animated.View style={[styles.box, animatedStyles]} />
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#27ae60',
    width: '25%',
    height: '25%',
  },
});
