import {React} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function BarraNav() {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-end',
      }}>
      <View
        style={{
          width: '30%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Button title="Galeria"></Button>
      </View>
      <View
        style={{
          width: '40%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Button title="Transferencias"></Button>
      </View>
      <View
        style={{
          width: '30%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Button title="Loja"></Button>
      </View>
    </View>
  );
}
