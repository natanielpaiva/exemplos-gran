import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <Text style={styles.texto}>
      Este é um exemplo de texto no React Native!
    </Text>
  );
}

const styles = StyleSheet.create({
  texto: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
  },
});