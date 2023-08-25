/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {React, useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  Alert,
  TextInput,
} from 'react-native';
import axios from 'axios';
import * as KeyChain from 'react-native-keychain';

export default function LoginScreen({navigation, route}) {
  return (
    <SafeAreaView
      style={{
        alignItems: 'center',
        backgroundColor: 'rgba(15, 54, 85, 255)',
        height: '100%',
      }}>
      <Text style={{color: 'white'}}>Insira o email da conta</Text>
      <SafeAreaView
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '80%',
          gap: 10,
          marginTop: 20,
        }}>
        <TextInput
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
          style={{
            height: 50,
            flex: 20,
            alignSelf: 'center',
            backgroundColor: 'white',
            borderRadius: 10,
            width: '20%',
          }}></TouchableOpacity>
      </SafeAreaView>
      <SafeAreaView
        style={{
          width: '80%',
          height: '20%',
          borderWidth: 5,
          borderColor: 'white',
          marginTop: 10,
          borderRadius: 10,
        }}>
        <SafeAreaView style={{}}></SafeAreaView>
      </SafeAreaView>
    </SafeAreaView>
  );
}
