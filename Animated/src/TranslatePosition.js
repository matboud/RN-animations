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
    this.state = {};
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.startAnimation}>
        <Animated.View style={styles.box} />
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'green',
    width: 50,
    padding: 50,
  },
});
