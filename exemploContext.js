import React, { createContext, useContext, useState } from 'react';
import { View, Text, Button } from 'react-native';

const ThemeContext = createContext();

const App = () => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme: () => setTheme(theme === 'light' ? 'dark' : 'light') }}>
      <Toolbar />
    </ThemeContext.Provider>
  );
};

const Toolbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <View style={{ padding: 20 }}>
      <Text>O tema atual é {theme}</Text>
      <Button title="Trocar tema" onPress={toggleTheme} />
    </View>
  );
};

export default App;