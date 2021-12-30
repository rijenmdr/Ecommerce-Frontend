import React from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

const TextAreaInput = ({ label, row, value, setValue, placeholder, disabled }) => {
    return (
        <Form.Group className="mb-3 text-input" controlId="exampleForm.ControlInput1">
            <Form.Label>{label}</Form.Label>
            <Form.Control
                value={value}
                as="textarea"
                rows={row}
                disabled={disabled || false}
                placeholder={placeholder}
                onChange={(e) => setValue(e.target.value)}
            />
        </Form.Group>
    )
}

TextAreaInput.propTypes = {
    label: PropTypes.string.isRequired,
    row: PropTypes.number.isRequired,
    value: PropTypes.any,
    setValue: PropTypes.func,
    placeholder: PropTypes.string.isRequired,
    disabled: PropTypes.bool
}

export default TextAreaInput
