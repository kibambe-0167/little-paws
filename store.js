import {configureStore} from '@reduxjs/toolkit';
import user from './redux/userSclice';

const store = configureStore({
  reducer: {
    user: user,
  },
});

export default store;
