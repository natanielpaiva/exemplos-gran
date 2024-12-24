import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import * as Location from 'expo-location';

export default function App() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        alert('Permissão para acessar localização negada!');
        return;
      }

      let loc = await Location.getCurrentPositionAsync({});
      setLocation(loc);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Localização Atual:</Text>
      {location ? (
        <Text>Lat: {location.coords.latitude}, Lon: {location.coords.longitude}</Text>
      ) : (
        <Text>Obtendo localização...</Text>
      )}
      <Button title="Atualizar Localização" onPress={async () => {
        let loc = await Location.getCurrentPositionAsync({});
        setLocation(loc);
      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});