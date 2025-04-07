// formHandler.util.js
import { loadNotificationToast } from "../components/toast.component.js";
import { saveContactForm } from "../services/storage.service.js";
import { clearForm } from "./clearForm.util.js";

export const handleContactFormSubmit = (contactForm) => {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        saveContactForm({
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        });
        loadNotificationToast("Form sent successfully!", { className: "bg-success text-white", timeout: 3000 });
        clearForm(contactForm);
    });
}