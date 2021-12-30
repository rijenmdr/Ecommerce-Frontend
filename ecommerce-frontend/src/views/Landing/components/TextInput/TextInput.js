import React from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

const TextInput = ({ label, type, value, setValue, placeholder, disabled }) => {
    return (
        <Form.Group className="mb-3 text-input" controlId="exampleForm.ControlInput1">
            <Form.Label>{label}</Form.Label>
            <Form.Control
                value={value}
                type={type}
                disabled={disabled || false}
                placeholder={placeholder}
                onChange={(e) => setValue(e.target.value)}
            />
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
