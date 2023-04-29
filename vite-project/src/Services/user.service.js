import Axios from "./caller.service";

let getUser = () => {
  return Axios.post("/api/v1/user/profile")
}

export const userService = {
  getUser
}