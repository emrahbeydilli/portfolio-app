import { getAboutMe, getProjects, } from "../dashboard/js/storage.js";

const aboutmeImage = document.querySelector("#aboutme-image");
const aboutmeText = document.querySelector("#aboutme-text");
const projectList = document.querySelector("#project-list");


const loadAboutMe = () => {
    const aboutme = getAboutMe()[0];
    aboutmeImage.src = aboutme.image;
    aboutmeText.textContent = aboutme.text;
}

const loadProjects = () => {
    const projects = getProjects();
    projectList.innerHTML = "";
    projects.forEach(project => {
        const projectElement = document.createElement("div");
        projectElement.setAttribute("class","col-sm-4 my-2");
        projectElement.innerHTML = 
        `
        <div class="card">
            <img src="${project.image}" alt="proje1" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title text-capitalize">${project.heading}</h5>
                <p class="card-text">${project.text}</p>
                <button class="btn btn-dark"><i class="bi bi-github"></i> Github</button>
            </div>
        </div>
        `;
    projectList.appendChild(projectElement)
    });

}

document.addEventListener("DOMContentLoaded",() => {
    loadAboutMe();
    loadProjects();
})
