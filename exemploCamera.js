import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet, Image } from 'react-native';
import { Camera } from 'expo-camera';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <View><Text>Sem acesso à câmera.</Text></View>;
  }

  return (
    <View style={styles.container}>
      {photo ? (
        <Image source={{ uri: photo.uri }} style={styles.image} />
      ) : (
        <Camera style={styles.camera} ref={ref => setCameraRef(ref)} />
      )}
      <Button
        title="Capturar Foto"
        onPress={async () => {
          if (cameraRef) {
            const photo = await cameraRef.takePictureAsync();
            setPhoto(photo);
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  camera: { flex: 1 },
  image: { flex: 1 }
});