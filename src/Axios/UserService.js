import Axios from "./Axios";

const getAllUsers = (page) => {
  return Axios.get(`/users?page=${page}`, {
    headers: {
      "x-api-key": "reqres-free-v1",
    },
  });
};

export { getAllUsers };
