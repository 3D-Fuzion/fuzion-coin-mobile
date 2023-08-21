import {React} from 'react';
import {View} from 'react-native';
import BarraNav from './BarraNav';
import Contador from './Contador';
export default function MainScreen() {
  return (
    <View
      style={{
        width: '90%',
        height: '90%',
        backgroundColor: '#5ff',
      }}>
      <Contador style={{backgroundColor: '#322'}} />
      <BarraNav style={{}} />
    </View>
  );
}
