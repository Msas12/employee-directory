/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const url = "https://randomuser.me/api/?results=200&nat=us"

export default {
  // Gets all users
  getUsers: function () {
    return axios.get(url);
  },
};
