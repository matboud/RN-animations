import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';

export default class TranslatePosition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animated: new Animated.Value(0),
    };
  }

  startAnimation = () => {
    Animated.timing(this.state.animated, {
      toValue: 100,
      duration: 500,
    }).start(() => {
      Animated.timing(this.state.animated, {
        toValue: -100,
        duration: 900,
      }).start(() => {
        Animated.timing(this.state.animated, {
          toValue: 0,
          duration: 700,
        }).start();
      });
    });
  };

  render() {
    const animatedStyle = {
      transform: [
        {
          translateX: this.state.animated,
        },
      ],
    };
    return (
      <TouchableWithoutFeedback onPress={this.startAnimation}>
        <Animated.View style={[styles.box, animatedStyle]} />
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#9b59b6',
    width: 50,
    padding: 50,
    borderRadius: 50,
  },
});
