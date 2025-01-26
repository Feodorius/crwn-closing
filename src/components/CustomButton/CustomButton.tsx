import { memo } from "react";
import "./customButton.scss";
import { BUTTON_TYPE_CLASSES } from "../../constants";

const CustomButton = ({ children, buttonType, ...otherProps }) => {

    return (
        <button {...otherProps} className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}>
            {children}
        </button>);
};

export default memo(CustomButton);