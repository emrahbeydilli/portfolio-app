import { countdownInterval } from "../../js/helpers/countdown.js";
import { loadModal } from "../../js/utils/bootstrap/modal.js";
import { getCurrentUser } from "./storage.js";

// deny access if currentUser is not exist
const currentUser = getCurrentUser();
if (!currentUser) {
    window.location.replace("./accessdeny.html");
}

// define HTML element that we use
const userImage = document.querySelector("#user-image");
const userName = document.querySelector("#user-name");
const logoutButton = document.querySelector("#logout-button");

// load CurrentUser
const loadCurrentUser = () => {
    const imageURL = currentUser.image ? currentUser.image : "img/defaultprofile.jpg";
    userImage.src = imageURL;
    userName.textContent = currentUser.username;

}
document.addEventListener("DOMContentLoaded", loadCurrentUser);

// logout button click
logoutButton.addEventListener("click", () => {
    loadModal(`You are logging out!`);
    countdownInterval();
    sessionStorage.removeItem("currentUser");
    setTimeout(() => window.location.replace("./index.html"), 3000);
});