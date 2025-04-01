import { getAboutMe, getCurrentUser } from "./storage.js";

// deny access if currentUser is not exist
const currentUser = getCurrentUser();
if (!currentUser) {
    window.location.replace("./accessdeny.html");
}

// define HTML element that we use
const imagePreview = document.querySelector("#image-preview");
const imageFile = document.querySelector("#image-file");
const infoText = document.querySelector("#info-text");
const saveButton = document.querySelector("#save-button");

// load Project List to Header Elements
const loadHeaderInfo = () => {
    const aboutMe = getAboutMe();
    imagePreview.src = `../img/${aboutMe[0].image}`;
    infoText.textContent = aboutMe[0].text;
}

document.addEventListener("DOMContentLoaded",loadHeaderInfo);