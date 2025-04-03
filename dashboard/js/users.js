import { getCurrentUser, getUsers, updateUser } from "./storage.js";

// deny access if currentUser is not exist
const currentUser = getCurrentUser();
if (!currentUser) {
    window.location.replace("./accessdeny.html");
}

const projectList = document.querySelector("#project-list");
const addButton = document.querySelector("#add-button");
const editUsername = document.querySelector("#edit-username");
const editPassword = document.querySelector("#edit-password");
const editImage = document.querySelector("#edit-image");
const editOption = document.querySelector("#edit-option");
const saveButton = document.querySelector("#save-button");
const editModal = new bootstrap.Modal(document.getElementById('edit-modal'));

let editingIndex = null;

// load Users to table
const loadUsers = () => {
    const users = getUsers();
    projectList.innerHTML = "";
    users.forEach((user,index) => {
        const tr = document.createElement("tr");
        tr.innerHTML= 
        `
        <th class="text-center">${user.id}</th>
        <td class="text-capitalize">${user.username}</td>
        <td>****</td>
        <td>${user.type}</td>
        <td class="text-center">
            <button class="btn btn-success btn-sm" id="edit-button" data-bs-toggle="modal"
                data-bs-target="#edit-modal" title="edit" onclick="editUser(${index})" >
                <i class="bi bi-pencil-square"></i>
            </button>
            <button class="btn btn-danger btn-sm" id="delete-button" title="delete">
                <i class="bi bi-trash-fill"></i>
            </button>
        </td>
        `;
        projectList.appendChild(tr);
    });
}

document.addEventListener("DOMContentLoaded", loadUsers);

window.editUser = (index) => {
    const users = getUsers();
    const user = users[index];
    editUsername.value = user.username;
    editPassword.value = user.password;
    editOption.value = user.type;
    editImage.src = user.image ? `img/${user.image}` : "img/defaultprofile.jpg";
    editingIndex = index;
}

saveButton.addEventListener("click",() => {
    if (editUsername.value && editPassword.value) {
        updateUser(editingIndex,{
            username:editUsername.value,
            password:editPassword.value,
            type:editOption.value,
            // image:editImage.src
        });
        loadUsers();
        editModal.hide();
    }
})