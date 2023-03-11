import uuid from 'react-native-uuid';
// use regex to check phone number, south african only
export function __regxPhone(number) {
  var trimmed = number.replace(/\s/g, '');
  var regex = /^0(6|7|8){1}[0-9]{8}$/;
  if (regex.test(trimmed) === true) {
    return true;
  } else {
    return false;
  }
}

// return 6 digit unique opt using uuid
export const getOpt = () => {
  const opt = uuid.v4().substr(0, 6);
  return opt;
};
