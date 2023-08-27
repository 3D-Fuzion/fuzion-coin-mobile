/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import {React, useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  ActivityIndicator,
  Image,
} from 'react-native';
import axios from 'axios';
import * as KeyChain from 'react-native-keychain';

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function Login() {
    axios
      .post('https://fuzion-coin.azurewebsites.net/user/login', {
        email: email,
        password: senha,
      })
      .then(async res => {
        await KeyChain.resetGenericPassword();
        await KeyChain.setGenericPassword(email, res.data.token);
        const id = res.data.id;
        if (res.status === 200) {
          navigation.navigate('Home', {
            id: id,
          });
        }
      })
      .catch(error => {
        if (error.response.status === 400) {
          Alert.alert('Senha Incorreta', 'Verique a sua senha.');
        } else if (error.response.status === 404) {
          Alert.alert(
            'Usuario Nao Encontrado',
            'Nao conseguimos achar um usuario com esse email.',
          );
        } else {
          Alert.alert('Ocorreu um Erro', 'O Sistema pode estar fora do ar');
        }
      });
  }

  return (
    <SafeAreaView>
      <SafeAreaView
        style={{
          width: '100%',
          backgroundColor: 'rgba(15,54,85,255)',
          height: '100%',
          alignItems: 'center',
        }}>
        <Image
          source={require('../assets/logo.png')}
          style={{
            width: '57%',
            height: '31%',
            marginTop: 60,
          }}></Image>
        <Text
          style={{
            fontSize: 20,
            textAlign: 'center',
            marginTop: 50,
            color: 'white',
          }}>
          Insira seus dados de acesso
        </Text>
        <SafeAreaView
          style={{
            width: '90%',
            marginTop: 20,
            paddingLeft: 30,
            paddingRight: 30,
            paddingBottom: 60,
            paddingTop: 20,
            borderRadius: 20,
            flexDirection: 'column',
            backgroundColor: 'rgba(17,76,120,255)',
          }}>
          <SafeAreaView>
            <Text style={{marginLeft: 10, color: 'white'}}>Email</Text>
            <TextInput
              inputMode={'email'}
              autoComplete={'email'}
              autoCapitalize={'none'}
              onChange={event => setEmail(event.nativeEvent.text)}
              style={{
                color: 'black',
                backgroundColor: 'white',
                margin: 10,
                padding: 10,
                fontSize: 20,
                borderRadius: 10,
              }}></TextInput>
            <Text style={{marginLeft: 10, color: 'white'}}>Senha</Text>
            <TextInput
              autoCapitalize={'none'}
              secureTextEntry={true}
              onChange={event => setSenha(event.nativeEvent.text)}
              style={{
                color: 'black',
                backgroundColor: 'white',
                margin: 10,
                padding: 10,
                fontSize: 20,
                borderRadius: 10,
              }}></TextInput>
          </SafeAreaView>
        </SafeAreaView>
        <SafeAreaView style={{width: '70%'}}>
          <TouchableOpacity onPress={Login}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 30,
                textAlign: 'center',
                textAlignVertical: 'center',
                height: 60,
                backgroundColor: 'rgb(90,200,255)',
                paddingLeft: 50,
                paddingRight: 50,
                borderRadius: 10,
                transform: [{translateY: -35}],
              }}>
              Entrar
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
      </SafeAreaView>
    </SafeAreaView>
  );
}
