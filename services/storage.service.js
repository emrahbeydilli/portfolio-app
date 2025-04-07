// storage.js
import { STORAGE_KEYS } from "../utils/constant.util.js";

export const getData = (key) => {
    try {
        return JSON.parse(localStorage.getItem(key)) || [];
    } catch (e) {
        console.error("Data reading error: ", e);
        return [];
    }
}

const saveData = (key, data) => {
    try {
        localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
        console.error("Data saving error: ", e);
    }
}

export const saveContactForm = (formData) => {
    const messages = getData(STORAGE_KEYS.MESSAGES);
    messages.push(formData);
    saveData(STORAGE_KEYS.MESSAGES, messages);
}

// Note that localStorage has a limited storage capacity (typically around 5MB). If you plan to store large amounts of data, you may want to look into alternative storage methods (e.g. IndexedDB).