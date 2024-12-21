import React, { Suspense, lazy } from 'react';
import { View, Text } from 'react-native';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

const App = () => {
  return (
    <Suspense fallback={<Text>Carregando...</Text>}>
      <View>
        <HeavyComponent />
      </View>
    </Suspense>
  );
};

export default App;