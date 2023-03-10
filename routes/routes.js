import React from 'react';
import AppStack from '../stacks/app';
import AuthStack from '../stacks/auth';
import {useSelector} from 'react-redux';
import {selectPhone} from '../redux/userSclice';

const Routes = () => {
  const _user = useSelector(selectPhone);
  return <>{_user ? <AppStack /> : <AuthStack />}</>;
};

export default Routes;
