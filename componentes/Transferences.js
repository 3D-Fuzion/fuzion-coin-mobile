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
  KeyboardAvoidingView,
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
        justifyContent: 'center',
        backgroundColor: 'rgba(15, 54, 85, 255)',
        flex: 1,
      }}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'top',
          gap: 10,
          width: '90%',
          height: '90%',
          backgroundColor: 'white',
          padding: 20,
          borderRadius: 10,
        }}>
        <TextInput
          style={{
            width: '100%',
            height: '10%',
            minHeight: 80,
            backgroundColor: 'orange',
            borderRadius: 10,
          }}></TextInput>
        <TouchableOpacity
          style={{
            width: '100%',
            height: '5%',
            minHeight: 40,
            backgroundColor: 'green',
            borderRadius: 10,
          }}></TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '100%',
            height: '30%',
            minHeight: 200,
            backgroundColor: 'purple',
            borderRadius: 10,
          }}></TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'purple',
            borderRadius: 10,
          }}></TouchableOpacity>
      </View>
    </View>
  );
}
