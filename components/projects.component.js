// projects.component.js
import { ProjectComponent } from "./project.component.js";

export const ProjectsComponent = (projects) => {
    const projectElements = projects.map(ProjectComponent);

    const section = document.createElement("section");
    section.id = "projects";
    section.className = "py-5";

    section.innerHTML = `
        <div class="container">
            <h2 class="display-4 text-center">Projects</h2>
            <div id="project-list" class="row"></div>
        </div>
    `;

    const projectListContainer = section.querySelector("#project-list");
    projectListContainer.append(...projectElements);

    return section;
}
