import axios from "axios";
import { API_ENDPOINT } from "../../constants";

//axios.defaults.xsrfCookieName = 'csrftoken'

const LOGIN_ENDPOINT = `${API_ENDPOINT}/accounts/login/`;
const REGISTER_ENDPOINT = `${API_ENDPOINT}/accounts/register/`;
const PROFILE_ENDPOINT = `${API_ENDPOINT}/accounts/profile/`;

export const getProfileData = () => {
  const accessToken = sessionStorage.getItem("access_token");
  console.log(accessToken);
  return axios.get(
    PROFILE_ENDPOINT,
    {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${accessToken}`,
      },
    }
  );
};

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
  return axios.post(REGISTER_ENDPOINT, payload, {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
