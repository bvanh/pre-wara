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
const sendInfo = (params) => {
 return baseApi
    .post(api.SEND_MAIL, {...params })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export { sendInfo, getInfo };
