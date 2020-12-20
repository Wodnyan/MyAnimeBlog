import axios from "axios";
import { API_ENDPOINT } from "../../constants";

const LOGIN_ENDPOINT = `${API_ENDPOINT}/accounts/login/`;
const REGISTER_EDNPOINT = `${API_ENDPOINT}/accounts/register/`;

export const login = (userIdentifier: string, password: string) => {
  const payload = {
    identifier: userIdentifier,
    password,
  };

  return axios.post(LOGIN_ENDPOINT, payload, {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const register = (username: string, email: string, password: string) => {
  const payload = {
    username,
    email,
    password,
  };
  return axios.post(REGISTER_EDNPOINT, payload, {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
