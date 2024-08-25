import axios from "axios";

const getList = () => {
  return axios.get("http://localhost:3001/persons");
};

const addNewPhone = (params) => {
  return axios.post("http://localhost:3001/persons", params);
};

const changePhone = (params, id) => {
  return axios.put("http://localhost:3001/persons/" + id, params);
};

const deletePhone = (id) => {
  return axios.delete("http://localhost:3001/persons/" + id);
};

export default { getList, addNewPhone, changePhone, deletePhone };
