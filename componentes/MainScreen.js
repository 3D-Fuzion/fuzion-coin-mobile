import {React, useEffect, useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import axios from 'axios';
import * as KeyChain from 'react-native-keychain';

export default function MainScreen({navigation, route}) {
  const [coins, setCoins] = useState(0);

  async function GetToken() {
    const token = await KeyChain.getGenericPassword();
    return token.password.toString();
  }

  function RefreshCoins() {
    const {id} = route.params;
    let url = 'https://fuzion-coin.azurewebsites.net/coin/' + id.id;

    axios
      .get(url)
      .then(res => {
        setCoins(res.data.coin);
      })
      .catch(err => {
        console.error(err);
      });
  }

  useEffect(() => {
    RefreshCoins();
  }, ['']);

  return (
    <SafeAreaView
      style={{alignItems: 'center', backgroundColor: 'white', height: '100%'}}>
      <SafeAreaView
        style={{width: '100%', marginTop: 10, backgroundColor: 'gray'}}>
        <Text style={{textAlign: 'center', fontSize: 80}}>{coins}</Text>
      </SafeAreaView>
      <TouchableOpacity
        onPress={RefreshCoins}
        style={{
          position: 'absolute',
          width: 50,
          height: 50,
          transform: [{translateY: +45}, {translateX: +150}],
          backgroundColor: 'rgb(200, 200, 200)',
        }}></TouchableOpacity>
      <SafeAreaView
        style={{
          width: '50%',
          height: 50,
          transform: [{translateY: -25}],
          backgroundColor: 'rgb(200, 200, 200)',
        }}>
        <Text style={{textAlign: 'center', fontSize: 80}}>Teste</Text>
      </SafeAreaView>
      <SafeAreaView
        style={{
          flexDirection: 'column',
          marginTop: 50,
          gap: 10,
          backgroundColor: 'rgb(200, 200, 200)',
          width: '90%',
        }}>
        <SafeAreaView
          style={{
            width: '100%',
            height: 100,
            backgroundColor: 'gray',
          }}></SafeAreaView>
        <SafeAreaView
          style={{
            width: '100%',
            height: 100,
            backgroundColor: 'gray',
          }}></SafeAreaView>
        <SafeAreaView
          style={{
            width: '100%',
            height: 100,
            backgroundColor: 'gray',
          }}></SafeAreaView>
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
          backgroundColor: 'rgb(200, 200, 200)',
        }}>
        <SafeAreaView
          style={{
            width: '20.00%',
            backgroundColor: 'gray',
            justifyContent: 'center',
          }}></SafeAreaView>
        <SafeAreaView
          style={{
            width: '20.00%',
            backgroundColor: 'gray',
            justifyContent: 'center',
          }}></SafeAreaView>
        <SafeAreaView
          style={{
            width: '20.00%',
            backgroundColor: 'gray',
            justifyContent: 'center',
          }}></SafeAreaView>
      </SafeAreaView>
    </SafeAreaView>
  );
}
