const axios = require('axios');

const signUp = async (email, password) => {
  try {
    const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBWQOZEnNlE7Mgog7cJQqP6fZWIXL4UCIM ', {
      email,
      password,
      returnSecureToken: true
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Unable to sign up user');
  }
};
