import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../pages/app/home';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="home"
        component={Home}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
