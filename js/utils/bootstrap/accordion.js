export const createAccordionItem = (id, title, content) => {
    return `
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" 
                    data-bs-target="#collapse${id}" aria-expanded="true" aria-controls="collapse${id}">
                    ${title}
                </button>
            </h2>
            <div id="collapse${id}" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    ${content}
                </div>
            </div>
        </div>
    `;
};