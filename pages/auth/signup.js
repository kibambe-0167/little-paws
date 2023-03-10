import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Box, Button, Input, Text} from 'native-base';
import {StyleSheet, Dimensions} from 'react-native';
import {__regxPhone} from '../../services/routines';
// import PhoneInput from 'react-native-phone-number-input';
import {sendSmsVerification} from '../../services/twilio';

//
const _width = Dimensions.get('screen').width;
const _height = Dimensions.get('screen').height;

const Signup = ({navigation}) => {
  const [phone, _setPhone] = useState('');
  // const [formattedValue, setFormattedValue] = useState('');
  // const phoneInput = useRef(null);

  const _signup = () => {
    console.log(phone);
    let isPhone = __regxPhone(phone);
    _setPhone(phone);
    console.log(`is phone number real: ${isPhone}`);

    if (isPhone) {
      sendSmsVerification(phone).then(res => {
        console.log(`results: ${res}`);
      });
    } else {
      console.log('Phone Number Is Not Valid');
    }
  };

  const handleChange = text => {
    _setPhone(text);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Box style={styles.headerText}>
        <Text fontSize={40} color={'#fff'}>
          Sign Up
        </Text>
      </Box>

      <Box style={styles.form}>
        <Input
          keyboardType="numeric"
          onChangeText={val => handleChange(val)}
          placeholderTextColor={'#fff'}
          my={4}
          fontSize={19}
          py={3}
          placeholder="Phone Number *"
        />

        {/* make the form have country code. */}
        {/* <PhoneInput
          ref={phoneInput}
          defaultValue={phone}
          defaultCode="ZA"
          layout="second"
          style={{width: _width}}
          onChangeText={text => {
            setPhone(text);
          }}
          onChangeFormattedText={text => {
            setFormattedValue(text);
          }}
          countryPickerProps={{withAlphaFilter: true}}
          withShadow
          autoFocus
        /> */}

        <Button
          onPress={() => _signup()}
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
