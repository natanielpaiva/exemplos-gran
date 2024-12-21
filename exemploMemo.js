import React, { memo } from 'react';
import { Text, TouchableOpacity } from 'react-native';

const MemoizedButton = memo(({ onPress, label }) => {
  console.log('Renderizou o botão:', label);
  return (
    <TouchableOpacity onPress={onPress} style={{ padding: 10, backgroundColor: '#ddd' }}>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
});

export default MemoizedButton;