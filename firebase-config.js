// firebase-config.js
// Shared Firebase configuration for all pages in the SINKARKES system
// Do NOT share this file publicly without configuring Firebase Security Rules

const firebaseConfig = {
    apiKey: "AIzaSyA8Hkwb-PYMeTdCwY0wfP3UVv7MFnGFZdE",
    authDomain: "catatan-9a225.firebaseapp.com",
    databaseURL: "https://catatan-9a225-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "catatan-9a225",
    storageBucket: "catatan-9a225.firebasestorage.app",
    messagingSenderId: "989304269442",
    appId: "1:989304269442:web:e90f948a5f8b2bd795a29b",
    measurementId: "G-PCEN5GK1EM"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
