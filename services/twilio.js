const BASE_URL = 'https://verify1-3595-rxwsws.twil.io';

export const checkVerification = async (phoneNumber, code) => {
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
    return json;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const sendSmsVerification = async phoneNumber => {
  try {
    const data = JSON.stringify({
      to: phoneNumber,
      channel: 'sms',
    });

    const response = await fetch(`${BASE_URL}/start-verify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
    });

    const res = await response.json();
    return res;
  } catch (error) {
    console.error(error);
    return false;
  }
};
