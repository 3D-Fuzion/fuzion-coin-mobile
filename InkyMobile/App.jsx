import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import BarraNav from './componentes/BarraNav';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <BarraNav />
      </SafeAreaView>
    );
  }
}
