import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Box, Input, Text, Button} from 'native-base';
import {useDispatch} from 'react-redux';
import {setPhone} from '../../redux/userSclice';
import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

//
const _width = Dimensions.get('screen').width;
const _height = Dimensions.get('screen').height;

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const [phone, _setPhone] = useState('');

  function regxPhone(number) {
    var trimmed = number.replace(/\s/g, '');
    var regex = /^0(6|7|8){1}[0-9]{8}$/;
    if (regex.test(trimmed) === true) {
      return true;
    } else {
      return false;
    }
  }

  const handleChange = text => {
    _setPhone(text);
    let isRegEx = regxPhone(text);
    console.log(isRegEx);
  };

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
        <Input
          placeholderTextColor={'#fff'}
          onChange={handleChange}
          value={phone}
          _text={{color: '#fff'}}
          color={'#fff'}
          placeholder="Phone Number *"
          my={4}
          py={3}
          fontSize={19}
        />
        <Button
          backgroundColor={'#fff'}
          alignSelf={'center'}
          w={_width * 0.45}
          _text={{fontSize: 20, color: '#7F9A9D'}}
          borderRadius={7}
          py={4}
          onPress={() => _login()}>
          Get Started
        </Button>
      </Box>

      <Box style={styles.logoutCont}>
        <Button
          backgroundColor={'#fff'}
          _text={{fontSize: 18, color: '#7F9A9D'}}
          borderRadius={60}
          onPress={() => navigation.navigate('signup')}>
          Sign Up
        </Button>
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
    paddingBottom: 40,
  },
  logoutCont: {
    height: _height * 0.3,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
});

export default Login;
