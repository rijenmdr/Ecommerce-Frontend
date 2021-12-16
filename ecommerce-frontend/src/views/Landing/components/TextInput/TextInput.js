import React from 'react'
import { Form } from 'react-bootstrap'

const TextInput = ({label, type, value, setValue, placeholder}) => {
    return (
        <Form.Group className="mb-3 text-input" controlId="exampleForm.ControlInput1">
            <Form.Label>{label}</Form.Label>
            <Form.Control 
                value={value} 
                type={type} 
                placeholder={placeholder} 
                onChange={(e)=>setValue(e.target.value)}
            />
        </Form.Group>
    )
}

export default TextInput
