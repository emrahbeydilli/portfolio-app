// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB8IL57TPN5UbypQA_SLbmcSH5ljm6WMbs",
    authDomain: "bs-portfolio-3acd1.firebaseapp.com",
    projectId: "bs-portfolio-3acd1",
    storageBucket: "bs-portfolio-3acd1.firebasestorage.app",
    messagingSenderId: "124464626551",
    appId: "1:124464626551:web:1fd48e9fda91b46187ff72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

// Email&Password ile authentication kaydı oluşturma
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
};