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
      animation: new Animated.Value(1),
    };
  }

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 2,
      duration: 700,
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 700,
      }).start();
    });
  };

  render() {
    const AnimatedStyles = {
      transform: [
        {
          scale: this.state.animation,
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
    backgroundColor: '#f1c40f',
    width: 50,
    padding: 50,
  },
});
