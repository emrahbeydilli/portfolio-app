// logout.service.js
import { loadNotificationToast } from "../components/toast.component.js";
import { STORAGE_KEYS } from "../utils/constant.util.js";
import { getData, removeData } from "./storage.service.js";

const logout = () => {
    loadNotificationToast(`Goodbye <span class="text-capitalize">${getData(STORAGE_KEYS.CURRENTUSER)}</span>. You are being directed to the login page.`, { className: "bg-success text-white", timeout: 3000 });
    removeData(STORAGE_KEYS.CURRENTUSER);
    setTimeout(() => window.location.href = "../dashboard/login.html", 3000);
};

document.addEventListener('DOMContentLoaded', () => {
    const logoutButton = document.getElementById('logout-button');
    if (logoutButton) {
        logoutButton.addEventListener('click', logout);
    }
});