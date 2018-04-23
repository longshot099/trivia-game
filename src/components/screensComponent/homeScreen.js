import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import he from 'he';

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
      res.results.forEach(item => {
        item.question = he.decode(item.question)
      })
      this.setState({
        triviaList: res.results 
      }, () => Actions.quiz({list: this.state.triviaList}))
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to the Trivia Game!</Text>
        <Text style={styles.statement}>You will be presented with 10 True of False questions.</Text>
        <Text style={styles.title}>Can you score 100%?</Text>

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
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 100,
    marginTop: 90 
  },
  statement: {
    padding: 20,
    paddingLeft: 50,
    paddingRight: 50,
    fontSize: 22,
    fontWeight: 'bold'
  },
  buttonText: {
    color: 'white'
  },
  button: {
    backgroundColor: '#007AFF',
    marginTop: 15,
    padding: 10,
    paddingLeft: 40,
    paddingRight: 40,
  }
});








