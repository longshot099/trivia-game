import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Actions, Router, Scene } from 'react-native-router-flux';

//Status Bar
import StatusBar from './src/components/statusBarComponent/statusBar';

//Screen Components
import HomeScreen from './src/components/screensComponent/homeScreen';
import QuizScreen from './src/components/screensComponent/quizScreen';

const scenes = Actions.create(
  <Scene key="root" hideNavBar>
    <Scene key="quiz" component={QuizScreen} title="Quiz"/>
    <Scene key="home" component={HomeScreen} title="Home"/>
  </Scene>
)

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Router scenes={scenes} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
