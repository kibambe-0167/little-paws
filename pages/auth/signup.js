import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Box, Button, Input, Text} from 'native-base';

const Signup = ({navigation}) => {
  return (
    <SafeAreaView>
      <Box>
        <Text>Sign Up</Text>
      </Box>

      <Box>
        <Input placeholder="Phone NUmber *" />
      </Box>

      <Box>
        <Button onPress={() => navigation.navigate('login')}>Login</Button>
      </Box>
    </SafeAreaView>
  );
};

export default Signup;
