import SignInForm from "components/SignInForm/SignInForm";
import SignUpForm from "components/SignUpForm/SignUpForm";
import { AuthenticationContainer } from "./authentication.styled";

const Authentication = () => {
    return (
        <AuthenticationContainer>
            <SignInForm />
            <SignUpForm />
        </AuthenticationContainer>
    );
};


export default Authentication;