import React from 'react'
import { Form } from 'react-bootstrap'

const CheckBoxes = ({item}) => {
    return (
        <div className='checkboxes d-flex justify-content-between mt-2'>
            <Form.Check
                type="checkbox"
                label={item}
                id={`check-${item}`}
            />
        </div>
    )
}

export default CheckBoxes
