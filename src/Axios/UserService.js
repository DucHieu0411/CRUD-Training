import Axios from "./Axios";

const getAllUsers = (page) => {
  return Axios.get(`/users?page=${page}`);
};

const addNewUser = (name, job) => {
  return Axios.post("/users", { name, job });
};

const updateUser = (name, job) => {
  return Axios.put(`/api/users/`, { name, job });
};

export { getAllUsers, addNewUser, updateUser };
