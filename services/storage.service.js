// storage.js
import { STORAGE_KEYS } from "../utils/constant.util.js";

const handleStorageError = (e) => console.error("Storage error: ", e);

export const getData = (key) => {
    try {
        return JSON.parse(localStorage.getItem(key)) || [];
    } catch (e) {
        handleStorageError(e);
        return [];
    }
};

const saveData = (key, data) => {
    try {
        localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
        handleStorageError(e);
    }
};

export const saveContactForm = (formData) => {
    const messages = [...getData(STORAGE_KEYS.MESSAGES), formData];
    saveData(STORAGE_KEYS.MESSAGES, messages);
};

// Note that localStorage has a limited storage capacity (typically around 5MB). If you plan to store large amounts of data, you may want to look into alternative storage methods (e.g. IndexedDB).