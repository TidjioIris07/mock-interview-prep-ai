import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC6z4dAQ3-FMKnpkljZtWWCA2pB_skFSZg",
  authDomain: "ai-mock-interview-33583.firebaseapp.com",
  projectId: "ai-mock-interview-33583",
  storageBucket: "ai-mock-interview-33583.firebasestorage.app",
  messagingSenderId: "107603638253",
  appId: "1:107603638253:web:a232c645574a432c0fd9e4",
  measurementId: "G-KJQQS8D71L"
};

// Initialize Firebase
const app = !getApps.length? initializeApp(firebaseConfig): getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);