import React from 'react';
import {Text, StyleSheet} from 'react-native';

export default function () {
  return <Text style={estilos.txt1}>CFB Cursos</Text>;
}

const estilos = StyleSheet.create({
  txt1: {
    color: '#000f',
    fontSize: 20,
  },
  txt2: {
    color: '#000f',
    fontSize: 15,
  },
});
