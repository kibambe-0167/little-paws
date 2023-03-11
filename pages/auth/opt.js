import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Box, Input, Text, Button} from 'native-base';
// import {useDispatch} from 'react-redux';
import {StyleSheet, Dimensions, Alert} from 'react-native';
import {checkVerification, sendSmsVerification} from '../../services/twilio';
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
    setInvalidCode(false);
    let num = '+27' + phoneNumber;
    checkVerification(num, code)
      .then(res => {
        console.log(res);
        if (res && res.success === true) {
          navigation.navigate('login');
          Alert.alert('Success', res.message);
        } else {
          setInvalidCode(true);
          Alert.alert('Failed', 'Verification Failed.Incorrect Token.');
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  function getNewOpt() {
    sendSmsVerification(phoneNumber).then(res => {
      if (res && res.success === true) {
        console.log('verified', res);
      } else {
        console.log(res);
      }
    });
  }
  return (
    <SafeAreaView style={styles.safeArea}>
      <Box>
        <Text style={styles.prompt}>Enter the code we sent you</Text>
        <Text style={styles.message}>
          {`An Opt Was Sent To (${phoneNumber}), Please Enter The Opt To Continue.`}
        </Text>

        <Input
          my={4}
          size={'md'}
          fontSize={20}
          placeholderTextColor={'#fff'}
          color="#fff"
          placeholder="Enter OPT Code"
          onChangeText={val => setCode(val)}
        />

        <Button
          _text={{
            color: '#7F9A9D',
            fontSize: 18,
          }}
          style={styles.btn}
          onPress={() => verify()}>
          Verify
        </Button>
      </Box>

      <Box marginTop={10}>
        <Button
          _text={{
            color: '#7F9A9D',
            fontSize: 18,
          }}
          style={styles.btn}
          onPress={() => getNewOpt()}>
          Get New Opt
        </Button>
      </Box>

      <Box marginTop={_height * 0.05} alignItems={'center'}>
        <Button
          onPress={() => navigation.navigate('signup')}
          _text={{
            fontSize: 20,
            color: '#fff',
            textDecorationLine: 'underline',
          }}
          variant={'link'}>
          Cancel or Change Phone Number
        </Button>
      </Box>

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
      {invalidCode && <Text style={styles.error}>Incorrect Opt Code.</Text>}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#7F9A9D',
    justifyContent: 'center',
  },
  prompt: {
    paddingVertical: 5,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    fontSize: 22,
    letterSpacing: 0.3,
    textTransform: 'capitalize',
  },
  message: {
    paddingVertical: 10,
    color: '#fff',
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
  btn: {
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingVertical: 5,
  },
  error: {
    color: '#f00',
    textAlign: 'center',
    fontSize: 20,
    paddingTop: 30,
  },
});

export default Opt;
