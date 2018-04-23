import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

export default class QuizScreen extends Component {
  static propTypes = {
    list: PropTypes.array
  }

  static defaultProps = {
    list: [{category: "History", correct_answer: "True"},{category: "Games", correct_answer: "True"},{category: "Math", correct_answer: "False"}]
  }

  constructor(props) {
    super(props);
    this.state = {
      list: this.props.list,
      num: 0
    }
  }

  render() {
    // console.log(this.state.list);
    const _this = this;
    return (
      <View style={styles.container}>
        <Text style={styles.category}>{this.state.list[0].category}</Text>
        <Text style={styles.question}>
          This is a quiz question. The current NBA commissioner's name is Adam Silver.
        </Text>
        <View style={styles.options}>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  category: {
    fontSize: 30,
    fontWeight: 'bold',    
    alignSelf: 'center',
    marginTop: 80,
  },
  question: {
    marginTop: 15,
    alignSelf: 'center',
    fontSize: 20
  },
})





