// getting users from localStorage
export const getUsers = () => {
    return JSON.parse(localStorage.getItem("users")) || null;
}

export const getCurrentUser = () => {
    return JSON.parse(sessionStorage.getItem("currentUser")) || null;
}

export const getProjects= () => {
    return JSON.parse(localStorage.getItem("projects")) || null;
}

export const getAboutMe = () => {
    return JSON.parse(localStorage.getItem("aboutme")) || null;
}

const saveUsers = (users) => {
    localStorage.setItem("users",JSON.stringify(users));
}

// Modal üzerinden todos güncelleme
export const updateUser = (index,updatedUser) => {
    // Veri setini okuma
    const users = getUsers();
    // İlgili user'ı güncelleme
    users[index] = {
        ...users[index], // Önceki verileri koru
        username: updatedUser.username,
        password: updatedUser.password,
    };
    // Veri setini kaydetme
    saveUsers(users);
}