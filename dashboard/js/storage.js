// getting users from localStorage
export const loadUsers = () => {
    return JSON.parse(localStorage.getItem("users")) || null;
}

export const getCurrentUser = () => {
    return JSON.parse(sessionStorage.getItem("currentUser") || null);
}