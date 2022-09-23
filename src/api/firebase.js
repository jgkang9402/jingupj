import firebase from 'firebase/compat/app'

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_KEY,
  authDomain: "mobile-invitation-95790.firebaseapp.com",
  projectId: "mobile-invitation-95790",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp;