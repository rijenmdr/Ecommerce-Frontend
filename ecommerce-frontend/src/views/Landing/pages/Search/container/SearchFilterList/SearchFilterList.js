import React, { useState } from 'react'
import { Button, Dropdown } from 'react-bootstrap';
import CheckBoxes from '../../../../components/CheckBoxes/CheckBoxes'
import TextInput from '../../../../components/TextInput/TextInput';
import RatingFilters from '../../components/RatingFilters/RatingFilters';

const SearchFilterList = () => {
    const [brand] = useState(["Samsung", "Apple", "Oneplus", "Nokia"]);
    const [service] = useState(["Cash On Delivery", "Digital Payment"]);
    const [ratings] = useState(["one", "two", "three", "four", "five"]);
    const [setRating] = useState(0);
    const [max, setMax] = useState(null);
    const [min, setMin] = useState(null)

    return (
        <div className='w-20 d-flex flex-column mr-xl side-filter'>
            <div className='mt-4 mb-3 brand-filter'>
                <h4 className='mb-3'>Brand</h4>
                {
                    brand.map((br, index) => (
                        <CheckBoxes
                            key={index}
                            item={br}
                        />
                    ))
                }
            </div>
            <Dropdown.Divider />
            <div className='mb-3 mt-3 service-filter'>
                <h4 className='mb-3'>Service</h4>
                {
                    service.map((ser, index) => (
                        <CheckBoxes
                            key={index}
                            item={ser}
                        />
                    ))
                }
            </div>
            <Dropdown.Divider />
            <div className='mb-3 mt-3 rating-filter'>
                <h4 className='mb-3'>Rating</h4>
                <div className='d-flex flex-column'>
                    {
                        ratings.map((rate, index) => (
                            <RatingFilters
                                rate={rate}
                                setRating={setRating}
                                index={index}
                                key={index}
                            />
                        ))
                    }
                </div>
            </div>
            <Dropdown.Divider />
            <div className='mb-3 mt-3 price-filter'>
                <h4 className='mb-3'>Price</h4>
                <div className='d-flex flex-column price-form'>
                    <div className='d-flex align-items-center price-input'>
                        <TextInput
                            label="Min"
                            placeholder={"Min"}
                            value={min}
                            setValue={setMin}
                            type="number"
                        />
                        <h5 className='mx-2 mb-0 mt-3'>-</h5>
                        <TextInput
                            label="Max"
                            placeholder={"Max"}
                            value={max}
                            setValue={setMax}
                            type="number"
                        />
                    </div>
                    <div className='d-flex justify-content-end'>
                        <Button size="md">Apply</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchFilterList
