import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const CartaoPerfil = () => {
  return (
    <View style={styles.cartao}>
      <Image
        source={{ uri: 'https://via.placeholder.com/100' }}
        style={styles.imagem}
      />
      <View>
        <Text style={styles.nome}>João Silva</Text>
        <Text style={styles.descricao}>Desenvolvedor Mobile</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartao: {
    flexDirection: 'row', // Alinha os elementos em linha (horizontalmente)
    backgroundColor: '#fff',
    padding: 15,
    margin: 10,
    borderRadius: 10, // Deixa os cantos arredondados
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5, // Sombra no Android
  },
  imagem: {
    width: 50,
    height: 50,
    borderRadius: 25, // Torna a imagem circular
    marginRight: 15,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  descricao: {
    fontSize: 14,
    color: '#666',
  },
});

export default CartaoPerfil;