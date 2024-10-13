import axiosBase, { AxiosInstance, AxiosRequestConfig } from "axios";

type APIType = "Default" | "NoFirebaseAuth";

const No_FirebaseAuth_CONFIG: () => AxiosRequestConfig = () => {
  return {
    baseURL: process.env.REACT_APP_BASE_URL,
    responseType: "json",
    headers: {
      "Content-Type": "application/json",
    },
  };
};

const DEFAULT_API_CONFIG: (token: string | undefined) => AxiosRequestConfig = (
  token: string | undefined
) => {
  console.log("baseurl is", process.env.REACT_APP_BASE_URL);
  return {
    baseURL: process.env.REACT_APP_BASE_URL,
    responseType: "json",
    headers: {
      "Content-Type": "application/json",
      FirebaseAuthorization: token != undefined && token,
    },
  };
};

export const axiosInstance: (apitype: APIType, token?: string | undefined) => AxiosInstance = (
  apitype,
  token = undefined
) => {
  let config: AxiosRequestConfig;

  switch (apitype) {
    case "Default":
      config = DEFAULT_API_CONFIG(token);
      break;
    case "NoFirebaseAuth":
      config = No_FirebaseAuth_CONFIG();
      break;
  }

  return axiosBase.create(config);
};
