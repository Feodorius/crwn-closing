import { memo } from "react";
import { Group, Input, FormInputLabel } from "./form-input.styled";

const FormInput = ({ label, id, type, value, handleChange }) => {
    return (
        <Group>
            <Input
                id={id}
                type={type}
                required
                value={value}
                onChange={handleChange} />
            {label &&
                <FormInputLabel
                    shrink={value.length}
                    htmlFor={id}>
                    {label}
                </FormInputLabel>
            }
        </Group>
    )
};

export default memo(FormInput);