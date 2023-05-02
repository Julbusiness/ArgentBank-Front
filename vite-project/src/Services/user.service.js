import Axios from "./caller.service";

let getUser = () => {
  return Axios.post("/api/v1/user/profile")
}

let editUser = (user) => {
  return Axios.put("/api/v1/user/profile", user)
}

export const userService = {
  getUser, editUser
}