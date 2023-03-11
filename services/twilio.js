// import {BASE_URL} from '@env';
const BASE_URL = 'https://verify-5977-7oxrdm.twil.io';

const sendSmsVerification = async phoneNumber => {
  try {
    const data = JSON.stringify({
      to: phoneNumber,
      channel: 'sms',
    });

    // const response = await fetch(`${BASE_URL}/start-verify`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: data,
    // });
    // const json = await response.json();

    await fetch(`${BASE_URL}/start-verify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });

    return null;
  } catch (error) {
    console.error(error);
    return false;
  }
};

const checkVerification = async (phoneNumber, code) => {
  try {
    const data = JSON.stringify({
      to: phoneNumber,
      code,
    });

    const response = await fetch(`${BASE_URL}/check-verify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
    });

    const json = await response.json();
    return json.success;
  } catch (error) {
    console.error(error);
    return false;
  }
};

module.exports = {
  sendSmsVerification,
  checkVerification,
};
