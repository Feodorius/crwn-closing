// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, User, createUserWithEmailAndPassword } from "firebase/auth";
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
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth: User, additionalInfo?) => {
    const userDocRef = doc(db, "users", userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName, email, createdAt, ...additionalInfo
            })
        } catch (error) {
            console.log("error creating the user:", error.message);
        }
    }
    return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email: string, password: string) => {
    return await createUserWithEmailAndPassword(auth, email, password);
};