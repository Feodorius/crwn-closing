import SignUpForm from "components/SignUpForm/SignUpForm";
import { createUserDocFromAuth, signInWithGooglePopup } from "utils/firebase/firebase.utils";

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocFromAuth(user);
        console.log({ userDocRef });
    }

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>
                Sign In With Google Popup
            </button>
            <SignUpForm />
        </div>
    );
};


export default SignIn;