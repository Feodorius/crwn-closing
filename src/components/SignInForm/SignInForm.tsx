import FormInput from "components/FormInput/FormInput";
import { FormEvent, useState } from "react";
import { createUserDocFromAuth, signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from "utils/firebase/firebase.utils";
import "./SignInForm.scss";
import CustomButton from "components/CustomButton/CustomButton";
import { BUTTON_TYPE_CLASSES } from "../../constants";

const defaultFormFields = {
    email: "",
    password: "",
};

const fields = [
    { id: "email", type: "email", label: "Email" },
    { id: "password", type: "password", label: "Password" },
];

const SignInForm = () => {
    const [formFields, setFormFields] = useState({ ...defaultFormFields });
    const { email, password } = formFields;

    const handleChange = (event) => {
        const { id, value } = event.target;
        setFormFields({ ...formFields, [id]: value });
    };

    const resetForm = () => setFormFields({ ...defaultFormFields });

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocFromAuth(user);
    }

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            console.log(response);
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
                    <CustomButton buttonType={BUTTON_TYPE_CLASSES.inverted} type="submit">Sign In</CustomButton>
                    <CustomButton buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google Sign In</CustomButton>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;