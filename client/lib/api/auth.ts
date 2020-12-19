import axios from "axios";

export const register = (username: string, email: string, password: string) => {
  const payload = {
    username,
    email,
    password,
  };
  return axios.post(
    "http://localhost:8000/api/v1/accounts/register/",
    payload,
    {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
