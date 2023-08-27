import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from './componentes/LoginScreen';
import MainScreen from './componentes/MainScreen';
import Transferences from './componentes/Transferences';
import TransferenceConfirmation from './componentes/TransferenceConfirmation';

const Stack = createNativeStackNavigator();
export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="TransferenceConfirmation">
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={MainScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Transferences"
            component={Transferences}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="TransferenceConfirmation"
            component={TransferenceConfirmation}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
