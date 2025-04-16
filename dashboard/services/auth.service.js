// auth.service.js
import { getData } from "./storage.service.js";

export const validateUser = ({username, password}, key) => getData(key).find(user => user.username === username && user.password === password);


export const checkCurrentUser = (currentUser) => {
    const user = getData(currentUser);
    user.length > 0 ? user : window.location.href = "../login.html";
};