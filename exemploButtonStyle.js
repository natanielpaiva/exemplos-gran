import React from 'react';
import { Button, View, Alert } from 'react-native';

export default function App() {
  return (
    <View>
      <Button
        title="Clique aqui"
        color="#841584"
        onPress={() => Alert.alert('Botão pressionado!')}
      />
    </View>
  );
}