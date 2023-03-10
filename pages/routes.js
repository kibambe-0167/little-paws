import React from 'react';
import {Text} from 'native-base';

const Routes = () => {
  return (
    <>
      {true ? (
        <Text>App Stack | Little Paws</Text>
      ) : (
        <Text>Auth Stack | Little Paws</Text>
      )}
    </>
  );
};

export default Routes;
