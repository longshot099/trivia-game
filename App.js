import React from 'react';
import { Actions, Router, Scene } from 'react-native-router-flux';

//Screen Components
import HomeScreen from './src/components/screensComponent/homeScreen';

const scenes = Actions.create(
  <Scene key="root" hideNavBar>
    <Scene key="home" component={HomeScreen} title="Home"/>
  </Scene>
)

export default class App extends React.Component {
  render() {
    return (
      <Router scenes={scenes} />
    );
  }
}
