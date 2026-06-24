// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyCk4bIeSbo915zyWoPBnGxqSoIZitaUf_I",
    authDomain: "abdulmoeez1.firebaseapp.com",
    projectId: "abdulmoeez1",
    storageBucket: "abdulmoeez1.firebasestorage.app",
    messagingSenderId: "707300688839",
    appId: "1:707300688839:web:6b6d660ec740baf4968fe2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export app
export { app };
