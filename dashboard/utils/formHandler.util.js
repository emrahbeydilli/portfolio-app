// formHandler.util.js
import { saveData, validateUser } from "../services/storage.service.js";
import { loadNotificationToast } from "../components/toast.component.js";
import { STORAGE_KEYS } from "../utils/constant.util.js";

export const handleLoginFormSubmit = (loginForm, key) => {
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(loginForm);
        const username = formData.get('username')?.trim();
        const password = formData.get('password')?.trim();

        if (!username || !password) {
            loadNotificationToast("Please fill in all fields!", { className: "bg-warning text-dark", timeout: 3000 });
            return;
        }

        validateUser({username, password}, key) ?
            (
                loadNotificationToast(`Welcome <span class="text-capitalize">${username}</span>, you are being directed to the control panel.`, { className: "bg-success text-white", timeout: 3000 }),
                saveData(STORAGE_KEYS.CURRENTUSER, username),
                setTimeout(() => window.location.href = "./dashboard.html", 3000)
            )
            : loadNotificationToast("Username or password is incorrect!", { className: "bg-danger text-white", timeout: 3000 });
    });
}