import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Actions, Router, Scene } from 'react-native-router-flux';

//Screen Components
import HomeScreen from './src/components/screensComponent/homeScreen';
import QuizScreen from './src/components/screensComponent/quizScreen';
import ResultsScreen from './src/components/screensComponent/resultsScreen';

const scenes = Actions.create(
  <Scene key="root" hideNavBar>
    <Scene key="quiz" component={QuizScreen} title="Quiz"/>
    <Scene key="home" component={HomeScreen} title="Home"/>
    <Scene key="results" component={ResultsScreen} title="Results"/>
  </Scene>
)

export default class App extends React.Component {
  render() {
    return (
      <Router scenes={scenes} />
    );
  }
}