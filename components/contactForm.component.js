// contactForm.component.js
export const ContactFormComponent = () => {
    const contactFormSection = document.createElement("section");
    contactFormSection.id = "contact";
    contactFormSection.className = "bg-light py-5";
    contactFormSection.innerHTML = `
        <div class="container">
            <h2 class="display-4 text-center">Contact</h2>
            <form id="submit-form">
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control" id="name" name="name" placeholder="Your name" required>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">E-mail</label>
                    <input type="email" class="form-control" id="email" name="email" placeholder="Your e-mail" required>
                </div>
                <div class="mb-3">
                    <label for="message" class="form-label">Message</label>
                    <textarea class="form-control" id="message" name="message" rows="3" placeholder="Your message"
                        required></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Send</button>
            </form>
        </div>
    `;

    return contactFormSection;
}