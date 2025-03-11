import FormInput from "components/FormInput/FormInput";
import { FormEvent, useCallback, useState } from "react";
import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from "utils/firebase/firebase.utils";
import "./SignInForm.scss";
import CustomButton from "components/CustomButton/CustomButton";
import { BUTTON_TYPE_CLASSES } from "../../constants";

const defaultFormFields = {
    signInEmail: "",
    signInPassword: "",
};

const fields = [
    { id: "signInEmail", type: "email", label: "Email" },
    { id: "signInPassword", type: "password", label: "Password" },
];

const SignInForm = () => {
    const [formFields, setFormFields] = useState({ ...defaultFormFields });
    const { signInEmail, signInPassword } = formFields;

    const handleChange = useCallback((event) => {
        const { id, value } = event.target;
        setFormFields({ ...formFields, [id]: value });
    }, [formFields]);

    const resetForm = () => setFormFields({ ...defaultFormFields });

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    }

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        try {
            await signInAuthUserWithEmailAndPassword(signInEmail, signInPassword);
            resetForm();
        } catch (error) {
            if (error.code === "auth/invalid-credential") {
                alert("Incorrect user credentials!");
            } else {
                console.log(error);

            }
        }

    };

    return (
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                {fields.map((field) => (
                    <FormInput
                        key={field.id}
                        id={field.id}
                        value={formFields[field.id]}
                        handleChange={handleChange}
                        type={field.type}
                        label={field.label} />
                ))}
                <div className="buttons-container">
                    <CustomButton buttonType={BUTTON_TYPE_CLASSES.base} type="submit">Sign In</CustomButton>
                    <CustomButton buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google Sign In</CustomButton>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;