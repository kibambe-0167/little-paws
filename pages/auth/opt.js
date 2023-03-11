import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Box, Input, Text, Button} from 'native-base';
import {useDispatch} from 'react-redux';
import {StyleSheet, Dimensions, Alert} from 'react-native';

import {checkVerification} from '../../services/twilio';
// for input like the ones in the screenshot.
// import OTPInputView from '@twotalltotems/react-native-otp-input';

//
const _width = Dimensions.get('screen').width;
const _height = Dimensions.get('screen').height;

const Opt = ({route, navigation}) => {
  const {phoneNumber} = route.params;
  const [invalidCode, setInvalidCode] = useState(false);
  const [code, setCode] = useState(null);

  function verify() {
    checkVerification(phoneNumber, code)
      .then(res => {
        console.log(res);
        if (res && res.success === true) {
          navigation.navigate('login');
          Alert.alert('Success', res.message);
        } else {
          Alert.alert('Failed', 'Verification Failed.');
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.prompt}>Enter the code we sent you</Text>
      <Text style={styles.message}>
        {`Your phone (${phoneNumber}) will be used to protect your account each time you log in.`}
      </Text>

      <Input
        my={4}
        size={'md'}
        fontSize={20}
        placeholderTextColor={'#fff'}
        color="#fff"
        placeholder="enter code"
        onChangeText={val => setCode(val)}
      />

      <Button onPress={() => verify()}>Verify</Button>

      {/* <OTPInputView
        style={{width: '80%', height: 200}}
        pinCount={6}
        autoFocusOnLoad
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeFilled={code => {
          checkVerification(phoneNumber, code).then(success => {
            if (!success) setInvalidCode(true);
            success && navigation.replace('Gated');
          });
        }}
      /> */}
      {invalidCode && <Text style={styles.error}>Incorrect code.</Text>}
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

export default Opt;
