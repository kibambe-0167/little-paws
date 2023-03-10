import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, Box, Button} from 'native-base';
import {selectPhone, setPhone} from '../../redux/userSclice';
import {useDispatch, useSelector} from 'react-redux';
import {StyleSheet} from 'react-native';
// import { Dimensions } from 'react-native';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const user = useSelector(selectPhone);

  const _logout = () => {
    dispatch(setPhone({phone: false}));
    console.log(user);
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <Box style={{}}>
        <Text
          py={5}
          fontSize={20}
          letterSpacing={0.5}
          textAlign={'center'}
          fontWeight={'bold'}>
          Little Paws Home Page
        </Text>
      </Box>

      <Box>
        <Button
          backgroundColor={'#fff'}
          _text={{fontSize: 18, color: '#7F9A9D'}}
          borderRadius={60}
          onPress={() => _logout()}>
          Log out
        </Button>
      </Box>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#7F9A9D',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
});
export default Home;
