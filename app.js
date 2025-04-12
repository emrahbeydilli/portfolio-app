// app.js
import { AboutMeComponent } from './components/aboutme.component.js';
import { ProjectsComponent } from './components/projects.component.js';
import { ContactFormComponent } from './components/contactForm.component.js';
import { getData } from './services/storage.service.js';
import { handleContactFormSubmit } from './utils/formHandler.util.js';
import { STORAGE_KEYS } from './utils/constant.util.js';
// import { loadDataset } from './dataset.js';
// loadDataset();

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');

    app.append(
        AboutMeComponent(getData(STORAGE_KEYS.ABOUTME)),
        ProjectsComponent(getData(STORAGE_KEYS.PROJECTS)),
        ContactFormComponent()
    );

    document
        .getElementById("contact-form")
        ?.addEventListener("submit", handleContactFormSubmit);
});

