import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Box, Input, Text} from 'native-base';

const Signup = () => {
  return (
    <SafeAreaView>
      <Box>
        <Text>Sign Up</Text>
      </Box>

      <Box>
        <Input placeholder="Phone NUmber *" />
      </Box>
    </SafeAreaView>
  );
};

export default Signup;
