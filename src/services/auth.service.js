import axios from 'axios';
import { authHeader, Header } from './apiHeader';

const API_URL = process.env.REACT_APP_API_BASE_URL;

class AuthService {
  login(email, password) {
    const data = new FormData();
    data.set('username', email);
    data.set('password', password);
    return axios.post(`${API_URL}api/v1/login/access-token`, data, { headers: Header("Access-Control-Allow-Origin", API_URL) }).then((response) => response);
  }

  testToken() {
    return axios
      .post(`${API_URL}api/v1/login/test-token`, null, {
        headers: authHeader(),
      })
      .then((response) => response.data);
  }
}

export default new AuthService();
