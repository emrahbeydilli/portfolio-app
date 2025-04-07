// projects.component.js
export const ProjectsComponent = (projects) => {
    const projectsSection = document.createElement("section");
    projectsSection.id = "projects";
    projectsSection.className = "py-5";
    
    const container = document.createElement("div");
    container.className = "container";
    projectsSection.appendChild(container);
    
    const h2 = document.createElement("h2");
    h2.className = "display-4 text-center";
    h2.textContent = "Projects";
    container.appendChild(h2);

    const projectContainer = document.createElement("div");
    projectContainer.className = "row";
    projectContainer.id = "project-list";
    container.appendChild(projectContainer);

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
    projectContainer.appendChild(projectElement)
    });
    
    return projectsSection;
}
