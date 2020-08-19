import api from "./api";
import axios from "axios";

const baseApi = axios.create({
  baseURL: `${api.ROOT}`,
});

const getInfo = () => {
  return baseApi
    .get(api.GET_INFO)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
const sendInfo = (setValidateIndex, validateIndex, params) => {
  return baseApi
    .post(api.SEND_MAIL, { ...params })
    .then((res) => {
      setValidateIndex({ ...validateIndex, textSuccess: res.data.message });
    })
    .catch((err) => {
      console.log(err.response);
      setValidateIndex({ status: "error", textHelp: err.response.data.message });
    });
};

export { sendInfo, getInfo };
