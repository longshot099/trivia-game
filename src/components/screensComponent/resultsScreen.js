import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class ResultsScreen extends Component {
  static propTypes = {
    choices: PropTypes.array,
    list: PropTypes.array,
    score: PropTypes.number
  }

  static defaultProps = {
    list: [],
    choices: ["False", "False"],
    score: 0
  }

  constructor(props) {
    super(props);
  }

  restartGame() {
    Actions.home()
  }

  render() {
    const { score } = this.props;

    return (
      <ScrollView 
        style={styles.contentContainer}
        automaticallyAdjustContentInsets={false}
        scrollEventThrottle={200}
      >
        <View style={styles.viewContainer}>
          <Text style={styles.resultText}>Your Scored {score +"/10"}</Text>
          <Text style={styles.resultText}>Your Results</Text>

          <View style={styles.resultsContainer}>
            {this.props.list.map((listItem, ind) => {
              const { correct_answer, question, difficulty } = listItem;
              const playerChoice = this.props.choices[ind];
              if(playerChoice !== correct_answer) {
                return (
                  <Text key={ind} style={styles.incorrectText}>- {"(" + correct_answer.toUpperCase() + ") " + question}</Text>
                )
              } else {
                return (
                  <Text key={ind} style={styles.correctText}>+ {"(" + correct_answer.toUpperCase() + ") " + question}</Text>
                )
              }
            })}
          </View>

          <Button
            style={styles.restartButton}
            title={"Play Again"}
            onPress={this.restartGame}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    paddingLeft:20,
    paddingRight:20
  },
  viewContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 80,
    marginBottom: 30
  },
  resultText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15
  },
  incorrectText: {
    color: 'red',
    fontSize: 15,
    margin: 5,
    padding: 10,
    fontWeight: 'bold'
  },
  correctText: {
    color: 'green',
    fontSize: 15,
    margin: 5,
    padding: 10,
    fontWeight: 'bold'
  }
});






