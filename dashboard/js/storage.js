// getting users from localStorage
export const loadUsers = () => {
    return JSON.parse(localStorage.getItem("users")) || false;
}