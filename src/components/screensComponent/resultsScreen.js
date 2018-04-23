import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class ResultsScreen extends Component {
  static propTypes = {
    choices: PropTypes.array,
    list: PropTypes.array
  }

  static defaultProps = {
    list: [
      {
        "category": "Entertainment: Video Games",
        "type": "boolean",
        "difficulty": "hard",
        "question": "Unturned originally started as a Roblox game.",
        "correct_answer": "True",
        "incorrect_answers": [
          "False"
        ]
      },
      {
        "category": "History",
        "type": "boolean",
        "difficulty": "easy",
        "question": "George Washington was the 31st President of Australia.",
        "correct_answer": "False",
        "incorrect_answers": [
          "True"
        ]
      }
    ],
    choices: ["False", "True"]
  }

  constructor(props) {
    super(props);
  }

  restartGame() {
    Actions.home()
  }

  render() {
    console.log(this.props.choices)
    return (
      <View style={styles.container}>
        <Text>Results screen</Text>
        <Button
          title={"Play Again"}
          onPress={this.restartGame}
        />
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