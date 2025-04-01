// getting users from localStorage
export const loadUsers = () => {
    return JSON.parse(localStorage.getItem("users")) || null;
}

export const getCurrentUser = () => {
    return JSON.parse(sessionStorage.getItem("currentUser")) || null;
}

export const getProjectList = () => {
    return JSON.parse(localStorage.getItem("projects")) || null;
}

export const getAboutMe = () => {
    return JSON.parse(localStorage.getItem("aboutme")) || null;
}