import React from 'react';
import { Image, StyleSheet } from 'react-native';

export default function App() {
  return (
    <Image 
      style={styles.imagem}
      source={{ uri: 'https://via.placeholder.com/150' }}
    />
  );
}

const styles = StyleSheet.create({
  imagem: {
    width: 150,
    height: 150,
  },
});