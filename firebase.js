// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, signInWithRedirect, getRedirectResult, updateProfile } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { getDatabase, ref, set, get } from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const isLocalhost = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";

const firebaseConfig = {
  apiKey: "AIzaSyBOCEyQN4zcZyNTWhO9-mN1-sBxM3RSywI",
  authDomain: isLocalhost ? "destiny-rewards-f3a5d.firebaseapp.com" : window.location.hostname,
  projectId: "destiny-rewards-f3a5d",
  storageBucket: "destiny-rewards-f3a5d.firebasestorage.app",
  messagingSenderId: "650427918746",
  appId: "1:650427918746:web:6a8c4c94f38169a28bf223",
  measurementId: "G-RMRCER7949"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Auth
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Initialize Databases
const db = getFirestore(app);
const rtdb = getDatabase(app);

// Expose references globally so non-module scripts can access them
window.firebaseAuth = auth;
window.firebaseProvider = provider;
window.signInWithPopup = signInWithPopup;
window.signOut = signOut;
window.signInWithRedirect = signInWithRedirect;
window.getRedirectResult = getRedirectResult;
window.updateProfile = updateProfile;

// Expose DB helpers
window.db = db;
window.doc = doc;
window.setDoc = setDoc;
window.getDoc = getDoc;
window.rtdb = rtdb;
window.rtdbRef = ref;
window.rtdbSet = set;
window.rtdbGet = get;




