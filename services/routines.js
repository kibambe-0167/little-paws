export function regxPhone(number) {
  var trimmed = number.replace(/\s/g, '');
  var regex = /^0(6|7|8){1}[0-9]{8}$/;
  if (regex.test(trimmed) === true) {
    return true;
  } else {
    return false;
  }
}

export const generateOtp = () => {
  const randomOtp = Math.floor(100000 + Math.random() * 900000);
  return randomOtp.toString();
};
