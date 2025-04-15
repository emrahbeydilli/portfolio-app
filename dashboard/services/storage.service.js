// storage.service.js
export const getData = (key) => {
    try {
        return JSON.parse(localStorage.getItem(key)) ?? [];
    } catch (e) {
        console.error("Data reading error: ", e);
        return [];
    }
}

export const saveData = (key, data) => {
    try {
        if (typeof data !== "undefined") {
            localStorage.setItem(key, JSON.stringify(data));
        }
    } catch (e) {
        console.error("Data saving error: ", e);
    }
}

export const removeData = (key) => {
    try {
        localStorage.removeItem(key);
    } catch (e) {
        console.error("Data removal error:", e);
    }
}


// Note that localStorage has a limited storage capacity (typically around 5MB). If you plan to store large amounts of data, you may want to look into alternative storage methods (e.g. IndexedDB).