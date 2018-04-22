import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

export default class QuizScreen extends Component {
  static propTypes = {
    list: PropTypes.array,
  };


  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.list)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Quiz Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
})