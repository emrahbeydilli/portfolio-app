// login.util.js
import { STORAGE_KEYS } from "../utils/constant.util.js";
import { handleLoginFormSubmit } from "./utils/formHandler.util.js";

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login-form");
    loginForm ? handleLoginFormSubmit(loginForm,STORAGE_KEYS.USERS) : console.error("Form element not found!");
});