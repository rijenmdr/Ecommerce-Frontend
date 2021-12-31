import React from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

const TextInput = ({
    name,
    label,
    type,
    value,
    handleChange,
    handleBlur,
    placeholder,
    disabled,
    touched,
    errors
}) => {
    return (
        <Form.Group className="mb-3 text-input" controlId="exampleForm.ControlInput1">
            <Form.Label>{label}</Form.Label>
            <Form.Control
                name={name}
                value={value}
                type={type}
                disabled={disabled || false}
                placeholder={placeholder}
                onChange={handleChange}
                onBlur={handleBlur}
                className={touched && errors ? "input-error" : null}
            />
            {touched && errors ? (
                <div className="error-message">{errors}</div>
            ) : null}
        </Form.Group>
    )
}

TextInput.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.any,
    setValue: PropTypes.func,
    placeholder: PropTypes.string.isRequired,
    disabled: PropTypes.bool
}

export default TextInput
