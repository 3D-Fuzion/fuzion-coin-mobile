import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Comp1 from './componentes/comp1';

export default class App1 extends Component {
  render() {
    return (
      <View>
        <Comp1 />
      </View>
    );
  }
}

// export default function App() {
//   return (
//     <View>
//       <Text>Hello World!</Text>
//     </View>
//   );
// }
