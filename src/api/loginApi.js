import firebaseApp from "./firebase";
import firebase from "firebase";


export default {
	async login(){
		const authProvider = new firebase.auth.GoogleAuthProvider();
    return firebaseApp.auth().signInWithPopup(authProvider);
		}
};
