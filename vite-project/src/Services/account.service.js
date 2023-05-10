import Axios from "./caller.service"

let login = (login) => {
  return Axios.post("/api/v1/user/login", login)
}

/* ----------------------------- Session Storage ---------------------------- */
let saveSessionToken = (token) => {
  sessionStorage.setItem('token', token)
}

let isSessionLogged = () => {
  let token = sessionStorage.getItem('token')
  return !!token
}

let logoutSession = () => {
  sessionStorage.removeItem('token')
}

let getSessionToken = () => {
  return sessionStorage.getItem('token')
}

/* ------------------------------ Local Storage ----------------------------- */
let saveToken = (token) => {
  localStorage.setItem('token', token)
}

let logout = () => {
  localStorage.removeItem('token')
}

let isLogged = () => {
  let token = localStorage.getItem('token')
  return !!token
}

let getToken = () => {
  return localStorage.getItem('token')
}

export const accountService = {
  login, saveSessionToken, isSessionLogged, logoutSession, getSessionToken, saveToken, logout, isLogged, getToken
}