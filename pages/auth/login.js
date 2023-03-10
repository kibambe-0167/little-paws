import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Box, Input, Text, Button} from 'native-base';
import {useDispatch} from 'react-redux';
import {setPhone} from '../../redux/userSclice';
import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

//
const _width = Dimensions.get('screen').width;

const Login = ({navigation}) => {
  const dispatch = useDispatch();

  const _login = data => {
    dispatch(setPhone({phone: true}));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Box style={styles.headerText}>
        <Text fontSize={40} color={'#fff'}>
          Log In
        </Text>
      </Box>

      <Box style={styles.form}>
        <Input placeholder="Phone Number *" my={4} py={3} fontSize={19} />
        <Button
          // backgroundColor={'#fff'}
          // color={'#7F9A9D'}
          alignSelf={'center'}
          w={_width * 0.45}
          _text={{fontSize: 20}}
          borderRadius={7}
          py={4}
          onPress={() => _login()}>
          Get Started
        </Button>
      </Box>

      <Box style={styles.logoutCont}>
        <Button onPress={() => navigation.navigate('signup')}>Sign Up</Button>
      </Box>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#7F9A9D',
    paddingTop: _width * 0.2,
  },
  headerText: {
    paddingTop: 30,
  },
  form: {
    backgroundColor: 'yellow',
    paddingBottom: 40,
  },
  logoutCont: {
    backgroundColor: 'pink',
    paddingVertical: 30,
  },
});

export default Login;
