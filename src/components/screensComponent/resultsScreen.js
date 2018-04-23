import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class ResultsScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.choices)
    return (
      <View style={styles.container}>
        <Text>Results screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 80
  }
})