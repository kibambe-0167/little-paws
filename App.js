/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {Provider} from 'react-redux';
import React from 'react';
import {NativeBaseProvider} from 'native-base';
import Routes from './routes/routes';
import store from './store';
import {NavigationContainer} from '@react-navigation/native';

function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Provider store={store}>
          <Routes />
        </Provider>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
