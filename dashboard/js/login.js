import { countdownInterval } from "../../js/helpers/countdown.js";
import { loadModal } from "../../js/utils/bootstrap/modal.js";
import { loadUsers } from "./storage.js";

const loginForm = document.querySelector("#login-form");
const usernameInput = document.querySelector("#username-input");
const passwordInput = document.querySelector("#password-input");

// validate user 
const validateUser = (username, password) => {
    const users = loadUsers();
    return users.find(user => user.username === username && user.password === password);
}

// Form submit event listener
if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const user = validateUser(usernameInput.value, passwordInput.value);
        user ?
            (
                loadModal(`merhaba ${user.username} hoşgeldin!`),
                countdownInterval(),
                sessionStorage.setItem("currentUser", JSON.stringify(
                    {
                        username: user.username,
                        image: user.image
                    }
                )),
                setTimeout(() => window.location.href = "./dashboard.html", 3000)
            )
            : loadModal("Kullanıcı adı veya şifre hatalı!", "alert");
    });
}
