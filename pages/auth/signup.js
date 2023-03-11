import React, {useState} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Box, Button, Input, Text} from 'native-base';
//
const _width = Dimensions.get('screen').width;
const _height = Dimensions.get('screen').height;

const Signup = ({navigation}) => {
  const BASE_URL = 'https://verify1-3595-rxwsws.twil.io';
  const [phoneNum, setPhoneNum] = useState('+270784530213');
  const [otp, setOtp] = useState('');
  const accountSid = 'ACfd3a3db20d4d1215bda3881fa49a0e00';
  const authToken = 'd83b4a275613d06250341b1443e10b44';
  // const twilio = new Twilio(accountSid, authToken);
  const fromNum = '+270784530213';

  const generateOtp = () => {
    const randomOtp = Math.floor(100000 + Math.random() * 900000);
    setOtp(randomOtp.toString());
  };

  const sendSmsVerification = async phoneNumber => {
    try {
      const data = JSON.stringify({
        to: phoneNumber,
        channel: 'sms',
      });

      const response = await fetch(`${BASE_URL}/start-verify`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: data,
      });

      const res = await response.json();
      return res;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  function clicked() {
    // generateOtp();
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

// import Twilio from 'twilio-client';

// // Set up a new Twilio client with your account SID and auth token
// const twilio = new Twilio(accountSid, authToken);

// // Generate a random verification code
// const verificationCode = Math.floor(100000 + Math.random() * 900000);

// // Send an SMS message with the verification code
// twilio.messages.create({
//   body: `Your verification code is ${verificationCode}`,
//   from: '+1234567890', // Replace with your Twilio phone number
//   to: '+15555555555' // Replace with the recipient's phone number
// })
// .then(message => {
//   console.log(`Verification code sent: ${verificationCode}`);
// })
// .catch(error => {
//   console.error(`Error sending verification code: ${error}`);
// });
