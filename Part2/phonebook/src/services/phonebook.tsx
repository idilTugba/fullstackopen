import axios from "axios";
const BASE_PATH = "api/persons";

const getList = () => {
  return axios.get(BASE_PATH);
};

const addNewPhone = (params) => {
  return axios.post(BASE_PATH, params);
};

const changePhone = (params, id) => {
  return axios.put(BASE_PATH + "/" + id, params);
};

const deletePhone = (id) => {
  return axios.delete(BASE_PATH + "/" + id);
};

export default { getList, addNewPhone, changePhone, deletePhone };
