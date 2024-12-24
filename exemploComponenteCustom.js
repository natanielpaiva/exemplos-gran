// Componente nativo
import { Text } from 'react-native';

<Text>Olá, mundo!</Text>

// Componente personalizado
import React from 'react';
import { Text, View } from 'react-native';

const Mensagem = () => (
  <View>
    <Text>Bem-vindo(a) ao React Native!</Text>
  </View>
);

export default Mensagem;