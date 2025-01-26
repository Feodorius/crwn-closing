import "./FormInput.scss";

const FormInput = ({ label, id, type, value, handleChange }) => {
    return (
        <div className="group">
            <input
                className="form-input"
                id={id}
                type={type}
                required
                value={value}
                onChange={handleChange} />
            {label &&
                <label
                    className={`${value.length ? "shrink" : ""} form-input-label`}
                    htmlFor={id}>
                    {label}
                </label>
            }
        </div>
    )
};

export default FormInput;