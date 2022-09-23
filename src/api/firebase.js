import { initializeApp } from 'firebase/app';


const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_KEY,
  authDomain: "jeju-4f5b1.firebaseapp.com",
  projectId: "jeju-4f5b1",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;