/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {Provider} from 'react-redux';
import React from 'react';
import {NativeBaseProvider, Box} from 'native-base';
import Routes from './routes/routes';
import store from './store';

function App() {
  return (
    <NativeBaseProvider>
      <Provider store={store} >
        <Box
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Routes />
        </Box>
      </Provider>
    </NativeBaseProvider>
  );
}

export default App;
