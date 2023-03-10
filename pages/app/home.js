import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, Box, Button} from 'native-base';
import {selectPhone, setPhone} from '../../redux/userSclice';
import {useDispatch, useSelector} from 'react-redux';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const user = useSelector(selectPhone);

  const _logout = () => {
    dispatch(setPhone({phone: false}));
    console.log(user);
  };
  return (
    <SafeAreaView>
      <Box style={{}}>
        <Text> Little Paws Home </Text>
      </Box>

      <Box>
        <Button onPress={() => _logout()}>Log out</Button>
      </Box>
    </SafeAreaView>
  );
};

export default Home;
