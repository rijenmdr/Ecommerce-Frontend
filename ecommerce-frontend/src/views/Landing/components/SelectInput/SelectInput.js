import React from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

const SelectInput = ({ selectOptions, value, setValue }) => {
    return (
        <div className='select-wrapper cursor-pointer'>
            <Form.Select
                size="xl"
                className="select-input border-0 bg-transparent box-shadow-none cursor-pointer"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            >
                {selectOptions.map(options => (
                    <option key={options.id} value={options.value}>
                        {options.label}
                    </option>
                ))}
            </Form.Select>
        </div>
    )
}

SelectInput.propTypes = {
    selectOptions: PropTypes.array.isRequired,
    value: PropTypes.any,
    setValue: PropTypes.func,
}

export default SelectInput
