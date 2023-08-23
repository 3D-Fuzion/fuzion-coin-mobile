import {React, useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import * as KeyChain from 'react-native-keychain';

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [isLogging, setLogin] = useState(false);

  // useEffect(() => {
  //   console.log(senha, email);
  // }, [senha, email]);

  function Login() {
    // axios.get('http://192.168.1.50:4000/user').then(response => {
    //   console.log(response.data);
    // });

    axios
      .post('http://192.168.1.50:4000/user/login', {
        email: email,
        password: senha,
      })
      .then(async res => {
        await KeyChain.setGenericPassword(email, res.data.token);
        const id = res.data.id;
        console.log(id);
        if (res.status === 200) {
          navigation.navigate('Home', {
            id: {id},
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
          backgroundColor: 'rgb(200,200,200)',
          height: '100%',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 60, textAlign: 'center', margin: 10}}>
          Bem Vindo ao Inky
        </Text>
        <Text style={{fontSize: 20, textAlign: 'center', marginTop: 100}}>
          Insira os seus Dados de Acesso
        </Text>
        <SafeAreaView
          style={{
            width: '80%',
            marginTop: 20,
            flexDirection: 'column',
            backgroundColor: 'rgb(210,210,210)',
          }}>
          <SafeAreaView>
            <Text style={{marginLeft: 10}}>Email</Text>
            <TextInput
              onChange={event => setEmail(event.nativeEvent.text)}
              style={{
                backgroundColor: 'gray',
                margin: 10,
                fontSize: 20,
              }}></TextInput>
            <Text style={{marginLeft: 10}}>Senha</Text>
            <TextInput
              secureTextEntry={true}
              onChange={event => setSenha(event.nativeEvent.text)}
              style={{
                backgroundColor: 'gray',
                margin: 10,
                fontSize: 20,
              }}></TextInput>
          </SafeAreaView>
        </SafeAreaView>
        <SafeAreaView style={{width: '80%'}}>
          <TouchableOpacity onPress={Login}>
            <Text
              style={{
                textAlign: 'center',
                marginTop: 50,
                backgroundColor: 'rgb(90,200,255)',
                paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 50,
                paddingRight: 50,
              }}>
              Entrar
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
      </SafeAreaView>
    </SafeAreaView>
  );
}
