// aboutme.component.js
export const AboutMeComponent = ({image,text}) => {
    const aboutMeSection = document.createElement("section");
    aboutMeSection.id = "aboutme";
    aboutMeSection.className = "bg-light py-5"
    aboutMeSection.innerHTML = `
        <section id="aboutme" class="bg-light py-5">
            <div class="container text-center">
                <h2 class="display-4 mb-3">About Me</h2>
                <img src="${image}" class="rounded-circle object-fit-cover mb-5" alt="profile image" width="200" height="200"
                    id="aboutme-image">
                <p class="lead" id="aboutme-text">${text}</p>
            </div>
        </section>
    `;
    return aboutMeSection;
}