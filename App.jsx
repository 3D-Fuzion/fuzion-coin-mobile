import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import MainScreen from './componentes/MainScreen';
import LoginScreen from './componentes/LoginScreen';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView>
        {/* <MainScreen style={{backgroundColor: 'red'}}></MainScreen> */}
        <LoginScreen></LoginScreen>
      </SafeAreaView>
    );
  }
}
