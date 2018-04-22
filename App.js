import React from 'react';
import { Actions, Router, Scene } from 'react-native-router-flux';

//Screen Components
import HomeScreen from './src/components/screensComponent/homeScreen';
import QuizScreen from './src/components/screensComponent/quizScreen';

const scenes = Actions.create(
  <Scene key="root" hideNavBar>
    <Scene key="home" component={HomeScreen} title="Home"/>
    <Scene key="quiz" component={QuizScreen} title="Quiz"/>
  </Scene>
)

export default class App extends React.Component {
  render() {
    return (
      <Router scenes={scenes} />
    );
  }
}
