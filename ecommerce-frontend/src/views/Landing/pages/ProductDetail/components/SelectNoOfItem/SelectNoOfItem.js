import React from 'react'
import { Form, InputGroup } from 'react-bootstrap'

const SelectNoOfItem = () => {
    return (
        <InputGroup className="d-flex select-no-item align-items-center" size="sm">

            <Form.Select size="sm" className="select-no border-0 bg-transparent box-shadow-none mr-sm">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
            </Form.Select>

            <div className="border-vertical mr-md" />
            <InputGroup.Text
                className='border-0 bg-transparent'
            >
                <h5 className='mb-0'>Pcs</h5>
            </InputGroup.Text>
        </InputGroup>
    )
}

export default SelectNoOfItem
