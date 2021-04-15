import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import { Provider } from 'react-redux';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import store from '../store';
import Home from '../screens/Home';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Provider store={store}>
        <Home />
      </Provider>
    </SafeAreaView>
  );
};

export default App;
