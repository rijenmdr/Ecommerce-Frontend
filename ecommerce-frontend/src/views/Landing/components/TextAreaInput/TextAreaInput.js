import React from 'react'
import { Form } from 'react-bootstrap'

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

export default TextAreaInput
