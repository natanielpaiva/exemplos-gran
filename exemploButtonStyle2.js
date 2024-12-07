import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const BotaoPersonalizado = ({ titulo, onPress }) => {
  return (
    <TouchableOpacity style={styles.botao} onPress={onPress}>
      <Text style={styles.texto}>{titulo}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  botao: {
    backgroundColor: '#4CAF50', // Cor de fundo
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center', // Centraliza o texto horizontalmente
    margin: 10,
  },
  texto: {
    color: '#fff', // Texto branco
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BotaoPersonalizado;