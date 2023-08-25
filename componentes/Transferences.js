/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {React, useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  Alert,
  View,
  Modal,
  TextInput,
  Pressable,
} from 'react-native';
import axios from 'axios';
import * as KeyChain from 'react-native-keychain';

export default function LoginScreen({navigation, route}) {
  const [userEmail, setUserEmail] = useState('');
  const [isLoad, setLoad] = useState(false);
  const [userData, setUserData] = useState();
  const [onPaying, setOnPaying] = useState(true);
  let userContainer;
  let payModal;
  async function GetUser() {
    const token = await KeyChain.getGenericPassword();
    console.log(token.password);
    console.log(userEmail);
    const url =
      'https://fuzion-coin.azurewebsites.net/user/pix/search/' + userEmail;

    axios
      .get(url, {
        headers: {
          'x-acess-token': token.password,
        },
      })
      .then(res => {
        if (res.status === 404) {
          Alert.alert('Nenhum usuario encontrado', 'Verique o email digitado');
        }
        setUserData(res.data.name);
        setLoad(true);
      })
      .catch(error => {
        Alert.alert(error.message, 'O Sistema pode estar fora do ar');
      });
  }
  if (isLoad) {
    userContainer = (
      <SafeAreaView
        style={{
          width: '90%',
          height: '90%',
        }}>
        <Text
          style={{
            fontSize: 15,
            color: 'white',
            fontWeight: 'bold',
          }}>
          Nome: {userData}
        </Text>
      </SafeAreaView>
    );
  } else {
    userContainer = (
      <SafeAreaView
        style={{
          width: '90%',
          height: '90%',
        }}></SafeAreaView>
    );
  }

  return (
    <View
      style={{
        alignItems: 'center',
        backgroundColor: 'rgba(15, 54, 85, 255)',
        height: '100%',
      }}>
      <Text style={{color: 'white'}}>Insira o email da conta</Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '80%',
          gap: 10,
          marginTop: 20,
        }}>
        <TextInput
          onChange={event => setUserEmail(event.nativeEvent.text)}
          autoCapitalize={'none'}
          style={{
            color: 'black',
            backgroundColor: 'white',
            padding: 10,
            flex: 80,
            width: '70%',
            height: 50,
            fontSize: 20,
            borderRadius: 10,
          }}
        />
        <TouchableOpacity
          onPress={GetUser}
          style={{
            height: 50,
            flex: 20,
            alignSelf: 'center',
            backgroundColor: 'white',
            borderRadius: 10,
            width: '20%',
          }}></TouchableOpacity>
      </View>
      <View
        style={{
          width: '80%',
          height: 50,
          borderWidth: 5,
          borderColor: 'white',
          marginTop: 10,
          borderRadius: 10,
        }}>
        <SafeAreaView
          style={{
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}>
          {userContainer}
        </SafeAreaView>
      </View>
      <TouchableOpacity
        style={{
          minHeight: '5%',
          maxHeight: '5%',
          marginTop: 10,
          width: '80%',
          backgroundColor: 'rgb(100,255,100)',
          borderRadius: 10,
        }}></TouchableOpacity>
    </View>
  );
}
