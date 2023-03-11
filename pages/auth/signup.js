import React, {useState} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Box, Button, Input, Text} from 'native-base';
// import PhoneInput from 'react-native-phone-number-input';
import {sendSmsVerification} from '../../services/twilio';
//
const _width = Dimensions.get('screen').width;
const _height = Dimensions.get('screen').height;

const Signup = ({navigation}) => {
  const [phoneNum, setPhoneNum] = useState('+270784530213');
  const fromNum = '+270784530213';

  function clicked() {
    sendSmsVerification(fromNum).then(res => {
      if (res && res.success === true) {
        console.log('verified', res);
        navigation.navigate('opt', {phoneNumber: fromNum});
      } else {
        console.log(res);
      }
    });
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <Box style={styles.headerText}>
        <Text fontSize={40} color={'#fff'}>
          Sign Up
        </Text>
      </Box>

      <Box style={styles.form}>
        <Input
          value={phoneNum}
          onChangeText={text => setPhoneNum(text)}
          placeholderTextColor={'#fff'}
          my={4}
          fontSize={19}
          py={3}
          placeholder="Phone Number *"
        />

        {/* do more research on this. to allow countries selection. */}
        {/* <PhoneInput
          ref={phoneInput}
          defaultValue={value}
          defaultCode="US"
          layout="first"
          onChangeText={text => {
            setValue(text);
          }}
          onChangeFormattedText={text => {
            setFormattedValue(text);
          }}
          countryPickerProps={{withAlphaFilter: true}}
          withShadow
          autoFocus
        /> */}

        <Button
          onPress={() => clicked()}
          backgroundColor={'#fff'}
          alignSelf={'center'}
          w={_width * 0.45}
          _text={{fontSize: 20, color: '#7F9A9D'}}
          borderRadius={7}
          py={4}>
          Create Account
        </Button>
      </Box>

      <Box style={styles.loginBtnCont}>
        <Button
          backgroundColor={'#fff'}
          _text={{fontSize: 18, color: '#7F9A9D'}}
          borderRadius={60}
          onPress={() => navigation.navigate('login')}>
          Login
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
  loginBtnCont: {
    height: _height * 0.3,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
});

export default Signup;
