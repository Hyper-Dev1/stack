import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const deletes = (id) => {
  if (window.confirm("Are you Sure?")) {
    const request = axios.delete(`${baseUrl}/${id}`);
    return request.then((response) => response.data);
  }
};
const getAll = () => {
  const request = axios.get(baseUrl);
  // console.log(request);
  return request.then((response) => response.data);
};

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request.then((response) => response.data);
};

const update = (id, newObject) => {
  if (window.confirm("Are you Sure?")) {
    const request = axios.put(`${baseUrl}/${id}`, newObject);
    return request.then((response) => response.data);
  }
};

export default {
  getAll: getAll,
  create: create,
  deletes: deletes,
  update: update,
};
