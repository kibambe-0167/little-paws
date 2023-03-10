import React from 'react';
import AppStack from '../stacks/app';
import AuthStack from '../stacks/auth';

const Routes = () => {
  return <>{true ? <AppStack /> : <AuthStack />}</>;
};

export default Routes;
