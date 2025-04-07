// bootstrap/toast.js
export const loadNotificationToast = (message, options = {}) => {
    let toastContainer = document.getElementById('toast-container');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.id = 'toast-container';
        toastContainer.className = 'toast-container position-fixed top-0 end-0 p-3';
        document.body.appendChild(toastContainer);
    }

    const toast = document.createElement('div');
    toast.className = `toast ${options.className || ''}`;
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'assertive');
    toast.setAttribute('aria-atomic', 'true');
    toast.innerHTML = `
        <div class="toast-header">
            <i class="bi ${options.icon || 'bi-info-circle'}"></i>
            <strong class="me-auto ms-2">${options.title || 'Notification'}</strong>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
            ${message}
        </div>
    `;

    toastContainer.appendChild(toast);

    const toastInstance = new bootstrap.Toast(toast);
    toastInstance.show();

    const timeout = options.timeout || 5000;
    setTimeout(() => {
        toast.remove();
    }, timeout);
}