export function __regxPhone(number) {
  var trimmed = number.replace(/\s/g, '');
  var regex = /^0(6|7|8){1}[0-9]{8}$/;
  if (regex.test(trimmed) === true) {
    return true;
  } else {
    return false;
  }
}
