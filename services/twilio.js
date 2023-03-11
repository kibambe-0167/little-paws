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
