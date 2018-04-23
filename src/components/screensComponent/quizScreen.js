import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class QuizScreen extends Component {
  static propTypes = {
    list: PropTypes.array
  }

  static defaultProps = {
    list: []
  }

  constructor(props) {
    super(props);
    this.state = {
      list: this.props.list,
      num: 0,
      choices: [],
      score: 0
    }
  }

  calculateScore() {
    let total = 0;
    for(let i = 0; i < this.state.list.length; i++) {
      if(this.state.choices[i] === this.state.list[i].correct_answer) {
        total++;
      }
    }

    return total;
  }

  chooseAnswer = (answer) => (event) => {
    const MAX_COUNT = 9;
    const answerString = answer === true? "True" : "False";

    if(this.state.num === MAX_COUNT) {
      this.setState(prevState => {
        return {
          choices: [...prevState.choices, answerString]
        }
      }, () => {
        let totalScore = this.calculateScore();

        Actions.results({
          choices: this.state.choices,
          list: this.state.list,
          score: totalScore
        });
      });
    } else {
      this.setState(prevState => {
        return {
          choices: [...prevState.choices, answerString],
          num: prevState.num + 1
        }
      });
    }

  }

  render() {
    const _this = this;
    const { num } = this.state;
    const { category, difficulty, question } = this.state.list[num];

    return (
      <View style={styles.container}>
        <Text style={styles.category}>{ category }</Text>
        <Text style={styles.category}>{ difficulty.toUpperCase() }</Text>
        <Text style={styles.question}>{ question }</Text>
        <Text style={styles.category}>{ num+1 + " of 10"}</Text>

        <View style={styles.options}>
          <TouchableOpacity 
            style={styles.buttonTrue}
            onPress={this.chooseAnswer(true)}
          >
            <Text style={styles.buttonText}>TRUE</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.buttonFalse}
            onPress={this.chooseAnswer(false)}
          >
            <Text style={styles.buttonText}>FALSE</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 80,
  },
  category: {
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 25,
    fontWeight: 'bold',    
    alignSelf: 'center',
  },
  question: {
    alignSelf: 'center',
    borderColor: 'black',
    borderWidth: 1,
    marginTop: '15%',
    marginBottom: 10,
    width: '85%',
    padding: 30,
    alignSelf: 'center',
    fontSize: 24
  },
  options: {
    flexDirection:'row',
    marginTop: 10
  },

  buttonTrue: {
    backgroundColor: '#007AFF',
    margin: 15,
    padding: 15,
    paddingLeft: 50,
    paddingRight: 50,
    marginRight: 50
  },
  buttonFalse: {
    backgroundColor: 'red',
    margin: 15,
    padding: 15,
    paddingLeft: 50,
    paddingRight: 50,
  },
  buttonText: {
    color: 'white'
  }
})





