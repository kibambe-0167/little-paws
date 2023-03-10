import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../pages/auth/login';
import Signup from '../pages/auth/signup';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="login"
        component={Login}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="signup"
        component={Signup}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
