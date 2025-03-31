const createAlertModal = (message, modalType) => {
    const modal = document.createElement('div');
    modal.setAttribute("class", "modal fade");
    modal.setAttribute("tabindex", "-1");
    modal.setAttribute("id", "alert-modal");
    switch (modalType) {
        case "alert":
            modal.innerHTML = `
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title text-danger fw-bold">Uyarı</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p>${message}</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Tamam</button>
                        </div>
                    </div>
                </div>
            `;
            break;

        default:
            modal.innerHTML = `
                <div class="modal-dialog modal-dialog-centered" id="basic-"modal>
                <div class="modal-content">
                        <div class="modal-body">
                            <p class="lead text-capitalize">${message}</p>
                            <p class="text-danger" id="countdown-text"></p>
                        </div>
                    </div>
                </div>
            `;
            break;
    }

    return modal;
};

// load modal
export const loadModal = (message, modalType) => {
    const modal = createAlertModal(message, modalType);
    document.body.appendChild(modal);
    const modalElement = new bootstrap.Modal(modal);
    modal.addEventListener('hidden.bs.modal', () => {
        modal.remove();
    });
    modalElement.show();
}