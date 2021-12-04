import axios from "axios";

const instance = axios.create({
  baseURL: `https://randomuser.me/api/?results=1000`,
})

export const getUser = () => {
  return instance.get().then(response => response.data.results)
}