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
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'top',
            gap: 10,
            width: '100%',
            height: '80%',
            backgroundColor: 'rgba(34,123,191,255)',
            padding: 20,
            borderRadius: 10,
          }}>
          <Text
            style={{
              width: '100%',
              height: '100%',
              color: 'white',
              fontSize: 24,
            }}>
            Revisão de transferência para: ***** *****
          </Text>
        </View>
        <View style={{width: '100%', flexDirection: 'row'}}>
          <Text
            style={{
              width: '50%',
              minWidth: '50%',
              height: '100%',
              color: 'white',
              fontWeight: 'bold',
              fontSize: 40,
            }}>
            R$ **,**
          </Text>
          <TouchableOpacity
            style={{
              width: '50%',
              height: '100%',
              borderRadius: 10,
              backgroundColor: 'orange',
              fontSize: 24,
            }}>
            <Text
              style={{
                width: '100%',
                color: 'white',
                fontWeight: 'bold',
                textAlign: 'center',
                transform: [{translateY: +10}],
                borderRadius: 10,
                fontSize: 24,
              }}>
              TRANSFERIR
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
