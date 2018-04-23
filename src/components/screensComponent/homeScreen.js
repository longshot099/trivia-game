import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import { getTriviaList } from '../../helpers';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      triviaList: null
    }
  }

  startTrivia = () => {
    getTriviaList().then(res => {
      this.setState({
        triviaList: res.results 
      }, () => Actions.quiz({list: this.state.triviaList}))
    })
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
          <Text style={styles.buttonText}>BEGIN</Text>
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
  buttonText: {
    color: 'white'
  },
  button: {
    backgroundColor: '#007AFF',
    marginTop: 15,
    padding: 10,
    paddingLeft: 40,
    paddingRight: 40
  }
});








