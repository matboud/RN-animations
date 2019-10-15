import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';

export default class Opacity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: new Animated.Value(1),
      color: new Animated.Value('tomato'),
    };
  }
  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 0,
      duration: 400,
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 400,
      }).start();
    });
  };
  render() {
    const animatedStyles = {
      opacity: this.state.animation,
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
    backgroundColor: 'tomato',
    width: 50,
    padding: 50,
  },
});
