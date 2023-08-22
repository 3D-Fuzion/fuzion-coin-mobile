import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import MainScreen from './componentes/MainScreen';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <MainScreen style={{backgroundColor: 'red'}}></MainScreen>
      </SafeAreaView>
    );
  }
}
