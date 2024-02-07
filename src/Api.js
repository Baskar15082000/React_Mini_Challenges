import axios, { Axios } from "axios";
export function getUsers(name) {
  const data = axios
    .get("https://api.github.com/search/users?per_page=5&q=" + name)
    .then((res) => res.data)
    .catch((error) => console.log(error));
  return data;
}
