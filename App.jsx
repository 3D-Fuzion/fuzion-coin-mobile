import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import MainScreen from './componentes/MainScreen';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView
        style={{
          backgroundColor: 'green',
        }}>
        <MainScreen style={{}}></MainScreen>
      </SafeAreaView>
    );
  }
}
