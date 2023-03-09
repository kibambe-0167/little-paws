/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NativeBaseProvider, Box} from 'native-base';
import Routes from './routes/routes';

function App() {
  return (
    <NativeBaseProvider>
      <Box
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Routes />
      </Box>
    </NativeBaseProvider>
  );
}

export default App;
