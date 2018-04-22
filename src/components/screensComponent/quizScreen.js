import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

export default class QuizScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>Quiz Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    justifyContent: 'center',
    alignSelf: 'center'
  }
})