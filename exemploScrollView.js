import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lista de Itens</Text>
      <ScrollView style={styles.scrollView}>
        {/* Renderizando uma lista de textos */}
        {Array.from({ length: 20 }, (_, i) => (
          <View key={i} style={styles.item}>
            <Text style={styles.itemText}>Item {i + 1}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  scrollView: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
  },
  item: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
  },
  itemText: {
    fontSize: 18,
    color: '#333',
  },
});

export default App;