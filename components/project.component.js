// project.component.js
export const ProjectComponent = ({ image, heading, text, link }) => {
    const div = document.createElement("div");
    div.className = "col-sm-4 my-2";
    div.innerHTML = `
        <div class="card">
            <img src="${image}" alt="${heading}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title text-capitalize">${heading}</h5>
                <p class="card-text">${text}</p>
                <a href="${link}" target="_blank" class="btn btn-dark"><i class="bi bi-github"></i> Github</a>
            </div>
        </div>
    `;
    return div;
};
