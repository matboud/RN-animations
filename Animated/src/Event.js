import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Animated,
  Text,
  Easing,
  ScrollView,
} from 'react-native';

export default class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: new Animated.Value(0),
    };
  }
  startAnimation = () => {};
  render() {
    const backgroundInterpolate = this.state.animation.interpolate({
      inputRange: [0, 1000],
      outputRange: ['rgb(231, 76, 60)', 'rgb(155, 89, 182)'],
    });

    const backgroundStyle = {
      backgroundColor: backgroundInterpolate,
    };
    return (
      <ScrollView
        style={styles.container}
        scrollEventThrottle={16}
        onScroll={
            Animated.event([
                {nativeEvent: {
                    contentOffset: {
                        y: this.state.animation
                    }
                }}
            ])
        }>
        <Animated.View style={[styles.content, backgroundStyle]} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  content: {
    height: 1000,
  },
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
