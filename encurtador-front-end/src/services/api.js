import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333/',
});

export const registerApi = ({ user,password }) => {
  const response = api.post(
    'register',
    {
      user,
      password,
    },
    {
      'Content-Type': 'application/json',
    },
  )
  .then((res) => {
    return res;
  }).catch((error) => {
    console.log(error);
    return 'User already used';
  })
  return response;
}

export const loginApi = ({ user,password }) => {
  const response = api.post(
    'login',
    {
      user,
      password,
    },
    {
      'Content-Type': 'application/json',
    },
  )
  .then((res) => {
    return res;
  }).catch((error) => {
    console.log(error);
    return 'Invalid User name or password';
  })
  return response;
}

export const loggedApi = (Token) => {
  const response = api.post(
    'logged',
    {
      "Token": Token,
    },
    {
      'Content-Type': 'application/json',
    },
  ).then((res) => {
    return res;
  }).catch((error) => {
    console.log(error);
    return 'User not logged';
  })
  return response;
};

export const generateApi = ({ origUrl, user }) => {
  const response = api.post(
    'api/short',
    {
      origUrl,
      user,
    },
    {
      'Content-Type': 'application/json',
    },
  ).then((res) => {
    console.log(res);
    return res;
  }).catch((error) => {
    console.log(error);
    return 'Invalid Url';
  })
  return response;
};
