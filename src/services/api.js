import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333/',
});

const loginApi = ({ user,password }) => {
  api.post(
    'login',
    {
      user,
      password,
    },
    {
      'Content-Type': 'application/json',
    },
  )
  .then((response) => {
    localStorage.setItem('Token', JSON.stringify(response.data));
  }).catch((error) => {
    console.log(error);
  })
}

export default loginApi;
