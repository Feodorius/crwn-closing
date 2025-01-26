import FormInput from "components/FormInput/FormInput";
import { FormEvent, useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from "utils/firebase/firebase.utils";
import "./SignUpForm.scss";
import CustomButton from "components/CustomButton/CustomButton";
import { BUTTON_TYPE_CLASSES } from "../../constants";

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
};

const fields = [
    { id: "displayName", type: "text", label: "Display Name" },
    { id: "email", type: "email", label: "Email" },
    { id: "password", type: "password", label: "Password" },
    { id: "confirmPassword", type: "password", label: "Confirm Password" }
];

const SignUpForm = () => {
    const [formFields, setFormFields] = useState({ ...defaultFormFields });
    const { displayName, email, password, confirmPassword } = formFields;
    const handleChange = (event) => {
        const { id, value } = event.target;
        setFormFields({ ...formFields, [id]: value });
    };

    const resetForm = () => setFormFields({ ...defaultFormFields });

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocFromAuth(user, { displayName });
            resetForm();
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                alert("The user already exists.");
            } else {
                console.log(error.message);
            }

        }

    };

    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign Up with your email and password</span>
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
                <CustomButton buttonType={BUTTON_TYPE_CLASSES.inverted} type="submit">Sign Up</CustomButton>
            </form>
        </div>
    );
};

export default SignUpForm;