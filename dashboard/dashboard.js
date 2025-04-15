import { getCurrentUser } from "./services/auth.service.js";

if (!getCurrentUser()) {
    // redirecting the page
}