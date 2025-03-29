import { countdownInterval } from "../../js/helpers/countdown.js";
import { createAlertModal } from "../../js/utils/bootstrap/modal.js";
import { loadUsers } from "./storage.js";

const loginForm = document.querySelector("#login-form");
const usernameInput = document.querySelector("#username-input");
const passwordInput = document.querySelector("#password-input");

// validate user 
const validateUser = (username, password) => {
    const users = loadUsers();
    return users.find(user => user.username === username && user.password === password);
}

// load modal
const loadModal = (message, modalType) => {
    const modal = createAlertModal(message, modalType);
    document.body.appendChild(modal);
    const modalElement = new bootstrap.Modal(modal);
    modal.addEventListener('hidden.bs.modal', () => {
        modal.remove();
    });
    modalElement.show();
}

// Form submit event listener
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const user = validateUser(usernameInput.value, passwordInput.value);
    user
        ? (
            loadModal(`merhaba ${user.username}`),
            countdownInterval(),
            localStorage.setItem("currentUser", JSON.stringify(user)),
            setTimeout(() => window.location.href = "./dashboard.html", 3000)
        )
        : loadModal("Kullanıcı adı veya şifre hatalı!", "alert");
});
