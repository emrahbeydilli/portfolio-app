// auth.service.js
import { STORAGE_KEYS } from "../utils/constant.util.js";
import { getData } from "./storage.service.js";

export const validateUser = ({username, password}, key) => getData(key).find(user => user.username === username && user.password === password);


export const getCurrentUser = () => {
    const currentUser = getData(STORAGE_KEYS.CURRENTUSER);
    return currentUser.length > 0 ? currentUser : null;
};