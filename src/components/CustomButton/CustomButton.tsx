import { memo } from "react";
import { BaseButton, GoogleSignInButton, InvertedButton } from "./customButton.styles";
import { BUTTON_TYPE_CLASSES } from "../../constants";

const getButton = (type = BUTTON_TYPE_CLASSES.base) => (
    {
        [BUTTON_TYPE_CLASSES.base]: BaseButton,
        [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
        [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
    }[type]
);

const Button = ({ children, buttonType, ...otherProps }) => {
    const CustomButton = getButton(buttonType);
    return (
        <CustomButton {...otherProps}>
            {children}
        </CustomButton>);
};

export default memo(Button);