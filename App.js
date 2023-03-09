/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NativeBaseProvider, Box} from 'native-base';

function App() {
  return (
    <NativeBaseProvider>
      <Box
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems:"center"
        }}>
        Hello world
      </Box>
    </NativeBaseProvider>
  );
}

export default App;
