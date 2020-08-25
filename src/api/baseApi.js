import api from "./api";
import axios from "axios";
import { listPopup } from "../components/page1/service";
const { SUCCESS } = listPopup;

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
const sendInfo = (
  setValidateIndex,
  validateIndex,
  params,
  setModalIndex,
  modalIndex,
  offModal
) => {
  return baseApi
    .post(api.SEND_MAIL, { ...params })
    .then(async (res) => {
      await offModal();
      setModalIndex({ ...modalIndex, visible: true, typePopup: SUCCESS });
      setValidateIndex({
        status: "",
        warningStatus: "warning",
        textHelp: null,
        textHelpPhone: "Không bắt buộc!",
      });
    })
    .catch((err) => {
      console.log(err.response);
      setValidateIndex({
        status: "error",
        textHelp: err.response.data.message,
      });
    });
};

export { sendInfo, getInfo };
