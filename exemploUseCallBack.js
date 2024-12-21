import React, { useCallback } from 'react';
import { View } from 'react-native';
import MemoizedButton from './MemoizedButton';

const App = () => {
  const handlePress = useCallback(() => {
    console.log('Botão clicado!');
  }, []);

  return (
    <View>
      <MemoizedButton onPress={handlePress} label="Clique aqui" />
    </View>
  );
};

export default App;