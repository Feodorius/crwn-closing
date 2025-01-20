// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, User } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC_sJuuaq3wMlNV02ztpjHb6cKtBhpUoSk",
    authDomain: "crwn-clothing-db-6f575.firebaseapp.com",
    projectId: "crwn-clothing-db-6f575",
    storageBucket: "crwn-clothing-db-6f575.firebasestorage.app",
    messagingSenderId: "543679443206",
    appId: "1:543679443206:web:3d324b72e1b64be4aaae87"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth: User) => {
    const userDocRef = doc(db, "users", userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName, email, createdAt
            })
        } catch (error) {
            console.log("error creating the user:", error.message);
        }
    }
    return userDocRef;
}; 