import React from 'react'
import { Form } from 'react-bootstrap'

const CheckBoxes = ({index, value ,label, checked, id, handleCheck}) => {
    return (
        <div className='checkboxes d-flex justify-content-between mt-2'>
            <Form.Check
                type="checkbox"
                value={value}
                onChange={(e)=>handleCheck(e)}
                checked={checked}
                label={label}
                id={id}
            />
        </div>
    )
}

export default CheckBoxes
