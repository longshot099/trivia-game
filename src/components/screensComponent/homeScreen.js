import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

export default class HomeScreen extends Component {

  startTrivia() {
    console.log("go to trivia game")
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Welcome to the Trivia Game! Tap BEGIN to start.
        </Text>

        <TouchableOpacity 
          style={styles.button}
          onPress={this.startTrivia}
        >
          <Text>BEGIN</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 15
  },
  button: {
    backgroundColor: '#007AFF',
    marginTop: 15,
    padding: 10,
    paddingLeft: 40,
    paddingRight: 40
  }
});