import {React, useEffect, useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import axios from 'axios';
import * as KeyChain from 'react-native-keychain';

export default function MainScreen(props) {
  const [coins, setCoins] = useState(0);

  async function GetToken() {
    const token = await KeyChain.getGenericPassword();
    console.log(token.password);
    return token.password.toString();
  }

  function RefreshCoins() {
    console.log(GetToken());
    // let config = {
    //   headers: {
    //     'x-acess-token':
    //       'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRW1haWwiOiJ2ZW5kZWRvcjRAZ21haWwuY29tIiwiaWF0IjoxNjkyODE2MzU3LCJleHAiOjE2OTI4MTY2NTd9.1Jsbx9VruCxNrzhg1m95pVQfMlerW4PGVAjlnKKVg6s',
    //   },
    // };
    axios
      .get(
        'https://fuzion-coin.azurewebsites.net/coin/64d3d4f8c8e9609cada7907c',
      )
      .then(async response => setCoins(response.data.coin))
      .catch(err => {
        console.error(err);
      });
    console.log(coins);
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
