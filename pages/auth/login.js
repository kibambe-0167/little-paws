import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Box, Input, Text} from 'native-base';

const Login = () => {
  return (
    <SafeAreaView>
      <Box>
        <Text>Log In</Text>
      </Box>

      <Box>
        <Input placeholder="Phone NUmber *" />
      </Box>
    </SafeAreaView>
  );
};

export default Login;
