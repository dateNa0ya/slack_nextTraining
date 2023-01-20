import axios, { AxiosResponse } from "axios";
import camelcaseKeys from "camelcase-keys";

export const useAxios = () => {
  const instance = axios.create({
    headers: { "Content-Type": "application/json" },
    responseType: "json",
    baseURL: "https://slack-training-7f34f-default-rtdb.firebaseio.com/",
  });

  instance.interceptors.response.use (
    (response: AxiosResponse): AxiosResponse => {
      return camelcaseKeys(response, { deep: true });``
    }
  )  

  return { axios: instance }
};