// app.js
import { AboutMeComponent } from './components/aboutme.component.js';
import { ProjectsComponent } from './components/projects.component.js';
import { ContactFormComponent } from './components/contactForm.component.js';
import { getData } from './services/storage.service.js';
import { handleContactFormSubmit } from './utils/formHandler.util.js';
import { STORAGE_KEYS } from './utils/constant.util.js';
// import { loadDataset } from './dataset.js';

document.addEventListener('DOMContentLoaded', () => {
    // loadDataset();
    const aboutMeData = getData(STORAGE_KEYS.ABOUT);
    const projectsData = getData(STORAGE_KEYS.PROJECTS);

    const app = document.getElementById('app');

    const aboutMeSection = AboutMeComponent(aboutMeData);
    const projectsSection = ProjectsComponent(projectsData);
    const contactFormSection = ContactFormComponent();

    [aboutMeSection, projectsSection, contactFormSection].forEach(section => app.appendChild(section));
    
    const contactForm = document.getElementById("contact-form");
    contactForm ? handleContactFormSubmit(contactForm) : console.error("Form element not found!");
});
