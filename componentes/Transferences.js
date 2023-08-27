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

  let userContainer;

  useEffect(() => {
    async function GetUser() {
      const token = await KeyChain.getGenericPassword();
      const url =
        'https://fuzion-coin.azurewebsites.net/user/pix/search/' + userEmail;

      axios
        .get(url, {
          headers: {
            'x-acess-token': token.password,
          },
        })
        .then(res => {
          console.log('Usuario encontrado');
          setUserData(res.data.name);
          setLoad(true);
        })
        .catch(error => {
          console.log('Aconteceu um Erro' + error);
        });
    }
    GetUser();
  }, [userEmail]);

  if (isLoad) {
    userContainer = (
      <View
        style={{
          padding: 10,
          width: '100%',
          height: '60%',
          backgroundColor: 'rgba(34,123,191,255)',
          borderRadius: 10,
        }}>
        <Text
          style={{
            width: '100%',
            color: 'white',
            fontSize: 25,
          }}>
          TRANSFERINDO
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 50,
          }}>
          R$ ***
        </Text>
        <Text
          style={{
            color: 'white',
            marginTop: 10,
            fontSize: 20,
          }}>
          Chave Pix: {userData}
        </Text>
        <Text
          style={{
            color: 'white',
            marginTop: 10,
            fontSize: 20,
          }}>
          Cpf: ***
        </Text>
        <Text
          style={{
            color: 'white',
            marginTop: 10,
            fontSize: 20,
          }}>
          Instituicao: ***
        </Text>
      </View>
    );
  } else {
    userContainer = (
      <View
        style={{
          width: '100%',
          height: '60%',
          borderRadius: 10,
          backgroundColor: 'rgba(34,123,191,255)',
        }}></View>
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
          height: '80%',
          backgroundColor: 'rgba(17,76,120,255)',
          padding: 20,
          borderRadius: 10,
        }}>
        <TextInput
          onChange={event => setUserEmail(event.nativeEvent.text)}
          placeholder="Digite a chave Pix"
          textAlign="center"
          style={{
            fontSize: 20,
            width: '90%',
            transform: [{translateY: -45}],
            height: '10%',
            backgroundColor: 'white',
            borderRadius: 10,
          }}></TextInput>
        {userContainer}
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            borderRadius: 10,
            width: '90%',
            height: '10%',
          }}>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              transform: [{translateY: +12}],
              borderRadius: 10,
              width: '100%',
              height: '100%',
            }}>
            Transferir para esse Pix
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
