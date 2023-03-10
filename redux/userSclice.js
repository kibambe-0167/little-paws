import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  phone: null,
};

const userSclice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
  },
});

export const {setPhone} = userSclice.actions;
export const selectPhone = state => state.user.phone;
export default userSclice.reducer;

// const initialState = {
//   data: null,
// };
// export const driverSlice = createSlice({
//   name: "driver",
//   initialState,
//   reducers: {
// 		setDriver: (state, action ) => {
// 			state.data = action.payload;
// 		}
// 	},
// });
// // export action dispatch
// export const { setDriver } = driverSlice.actions;
// // export for selectors.
// export const selectDriver = ( state ) => state.driver.data;
// // export for store purposes.
// export default driverSlice.reducer;
