import {React, useEffect, useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity, Alert} from 'react-native';
import axios from 'axios';
import * as KeyChain from 'react-native-keychain';

export default function MainScreen({navigation, route}) {
  const [coins, setCoins] = useState(0);

  async function GetToken() {
    const token = await KeyChain.getGenericPassword();
    return token.password.toString();
  }

  async function RefreshCoins() {
    const {id} = route.params;
    let url = 'https://fuzion-coin.azurewebsites.net/coin/' + id.id;
    token = await KeyChain.getGenericPassword();
    console.log(token.password);
    axios
      .get(url, {
        headers: {
          'x-acess-token': token.password,
        },
      })
      .then(res => {
        setCoins(res.data.coin);
      })
      .catch(error => {
        if (error.response.status === 401) {
          Alert.alert('Sessão Expirada', 'Vamos te desconectar por segurança');
          navigation.navigate('Login');
        } else {
          Alert.alert('Ocorreu um Erro', 'O Sistema pode estar fora do ar');
        }
      });
  }

  useEffect(() => {
    RefreshCoins();
  }, ['']);

  return (
    <SafeAreaView
      style={{
        alignItems: 'center',
        backgroundColor: 'rgba(15, 54, 85, 255)',
        height: '100%',
      }}>
      <SafeAreaView
        style={{
          width: '80%',
          borderRadius: 10,
          marginTop: 40,
          backgroundColor: 'rgba(17,76,120,255)',
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 80,
            color: 'white',
            fontWeight: '500',
            transform: [{translateY: -10}],
          }}>
          {coins}
        </Text>
      </SafeAreaView>
      <TouchableOpacity
        onPress={RefreshCoins}
        style={{
          position: 'absolute',
          width: 60,
          height: 60,
          borderRadius: 10,
          borderWidth: 4,
          borderColor: 'rgba(15, 54, 85, 255)',
          transform: [{translateY: +70}, {translateX: +160}],
          backgroundColor: 'rgb(90,200,255)',
        }}></TouchableOpacity>
      <SafeAreaView
        style={{
          width: '50%',
          height: 50,
          borderRadius: 10,
          borderWidth: 4,
          borderColor: 'rgba(15, 54, 85, 255)',
          transform: [{translateY: -25}],
          backgroundColor: 'rgba(40,76,120,255)',
        }}>
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            textAlignVertical: 'center',
            fontSize: 30,
          }}>
          R$ 0,00
        </Text>
      </SafeAreaView>
      <SafeAreaView
        style={{
          flexDirection: 'column',
          marginTop: 50,
          gap: 10,
          backgroundColor: 'transparent',
          width: '90%',
        }}>
        <TouchableOpacity>
          <SafeAreaView
            style={{
              width: '100%',
              height: 100,
              borderRadius: 10,
              backgroundColor: 'rgba(17,76,120,255)',
            }}>
            <Text
              style={{
                color: 'white',
                width: '100%',
                textAlignVertical: 'center',
                height: '100%',
                fontSize: 30,
                textAlign: 'center',
              }}>
              Sacar Dinheiro
            </Text>
          </SafeAreaView>
        </TouchableOpacity>
        <TouchableOpacity>
          <SafeAreaView
            style={{
              width: '100%',
              borderRadius: 10,
              height: 100,
              backgroundColor: 'rgba(17,76,120,255)',
            }}>
            <Text
              style={{
                color: 'white',
                width: '100%',
                textAlignVertical: 'center',
                height: '100%',
                fontSize: 30,
                textAlign: 'center',
                textAlignVertical: 'center',
              }}>
              Ver Extrato
            </Text>
          </SafeAreaView>
        </TouchableOpacity>
        <TouchableOpacity>
          <SafeAreaView
            style={{
              width: '100%',
              height: 100,
              borderRadius: 10,
              backgroundColor: 'rgba(17,76,120,255)',
            }}>
            <Text
              style={{
                color: 'white',
                width: '100%',
                textAlignVertical: 'center',
                height: '100%',
                fontSize: 30,
                textAlign: 'center',
                textAlignVertical: 'center',
              }}>
              Realizar Transferência
            </Text>
          </SafeAreaView>
        </TouchableOpacity>
      </SafeAreaView>
      <SafeAreaView
        style={{
          position: 'absolute',
          bottom: 0,
          flexDirection: 'row',
          gap: 40,
          justifyContent: 'center',
          width: '100%',
          height: 80,
          marginBottom: 20,
          backgroundColor: 'rgba(15, 54, 85, 255)',
        }}>
        <TouchableOpacity
          style={{
            width: '20.00%',
            borderRadius: 10,
            backgroundColor: 'rgba(17,76,120,255)',
            justifyContent: 'center',
          }}></TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '20.00%',
            borderRadius: 10,
            backgroundColor: 'rgba(17,76,120,255)',
            justifyContent: 'center',
          }}></TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '20.00%',
            borderRadius: 10,
            backgroundColor: 'rgba(17,76,120,255)',
            justifyContent: 'center',
          }}></TouchableOpacity>
      </SafeAreaView>
    </SafeAreaView>
  );
}
