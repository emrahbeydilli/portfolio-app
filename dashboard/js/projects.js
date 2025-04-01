import { getCurrentUser } from "./storage.js";

// deny access if currentUser is not exist
const currentUser = getCurrentUser();
if (!currentUser) {
    window.location.replace("./accessdeny.html");
}