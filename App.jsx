import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import Home from './componentes/Home';
export default class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    );
  }
}
