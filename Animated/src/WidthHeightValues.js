import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';

export default class WidthHeightValues extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: new Animated.Value(100),
      switcher: true,
    };
  }

  startAnimation = () => {
    if (this.state.switcher) {
      Animated.timing(this.state.animation, {
        toValue: 250,
        duration: 700,
      }).start();
    } else {
      Animated.timing(this.state.animation, {
        toValue: 100,
        duration: 700,
      }).start();
    }

    this.setState({
      switcher: !this.state.switcher,
    });
  };

  render() {
    const animatedStyles = {
      width: this.state.animation,
      height: this.state.animation,
    };
    return (
      <TouchableWithoutFeedback onPress={this.startAnimation}>
        <Animated.View style={[styles.box, animatedStyles]}>
          <Text>
            {' '}
            lorem ipsum dolor set amet is not guilox, lorem ipsum dolor set amet
            is not guilox , lorem ipsum dolor set amet is not guilox lorem ipsum
            dolor set amet is not guilox lorem ipsum dolor set amet is not
            guilox{' '}
          </Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#1abc9c',
    padding: 15,
  },
});
