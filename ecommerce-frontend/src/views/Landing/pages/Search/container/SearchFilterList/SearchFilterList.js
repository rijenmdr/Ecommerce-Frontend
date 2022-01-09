import React, { useEffect, useState } from 'react'
import { Button, Dropdown } from 'react-bootstrap';
import CheckBoxes from '../../../../components/CheckBoxes/CheckBoxes'
import TextInput from '../../../../components/TextInput/TextInput';
import RatingFilters from '../../components/RatingFilters/RatingFilters';

const SearchFilterList = ({
    setBrands,
    brands,
    selectedService,
    setSelectedService,
    setSelectedRating,
    selectedRating,
    maxPrice,
    setMaxPrice,
    minPrice,
    setMinPrice,
    submitPrice,
    enable,
    setEnable,
    service,
    setService
}) => {
    // const [brand] = useState(["Samsung", "Apple", "Oneplus", "Nokia"]);
    const [ratings] = useState(["one", "two", "three", "four", "five"]);
    const [setRating] = useState(0);
    const [disable, setDisable] = useState(false);

    const handleService = (e) => {
        const { checked, value } = e.target;

        const index = service.findIndex(ser => ser.value === value);
        const tempData = service;

        if (checked) {
            tempData[index].checked = true
            setService(tempData)
            setSelectedService([...selectedService, value]);
        } else {
            tempData[index].checked = false
            setService(tempData)
            const temp = selectedService.filter(d => d !== value);
            setSelectedService(temp)
        }
        // const temp = service;
        // const index = service.findIndex(data=>data.id===id);
        // console.log(index)
        // temp[index].checked = !temp[index.checked]
        // setService(temp);
    }

    const handleBrandChange = (e) => {
        const { checked, value } = e.target;

        const index = brands.findIndex(bra => bra._id === value);
        const tempData = brands;

        if (checked) {
            console.log(checked, value)
            tempData[index].checked = true
            setBrands(tempData)
        } else {
            tempData[index].checked = false
            setBrands(tempData)
        }
    }

    const handleRatingChange = (e) => {
        setSelectedRating(e.target.value)
    }

    const handleMaxPrice = (e) => {
        const price = e.target.value;
        setMaxPrice(price)
        if (minPrice && parseFloat(minPrice) > parseFloat(price)) {
            setDisable(true)
            setEnable(true)
        } else {
            setEnable(false)
            setDisable(false)
        }
    }

    const handleMinPrice = (e) => {
        const price = e.target.value;
        setMinPrice(price)
        if (maxPrice && maxPrice < price) {
            setDisable(true)
            setEnable(true)
        } else {
            setEnable(false)
            setDisable(false)
        }
    }

    useEffect(() => {
        if (!maxPrice && !minPrice) {
            setEnable(true)
        }
    }, [maxPrice, minPrice])

    console.log(minPrice, maxPrice)

    return (
        <div className='w-20 d-flex flex-column mr-xl side-filter'>
            {brands && brands.length !== 0 &&
                <>
                    <div className='mt-4 mb-3 brand-filter'>
                        <h4 className='mb-3'>Brand</h4>
                        {
                            brands.map((br, index) => (
                                <CheckBoxes
                                    key={index}
                                    index={index}
                                    value={br._id}
                                    id={br._id}
                                    label={br.name}
                                    checked={br.checked}
                                    handleCheck={handleBrandChange}
                                />
                            ))
                        }
                    </div>
                    <Dropdown.Divider />
                </>
            }
            <div className='mb-3 mt-3 service-filter'>
                <h4 className='mb-3'>Service</h4>
                {
                    service.map((ser, index) => (
                        <CheckBoxes
                            key={index}
                            index={index}
                            value={ser.value}
                            id={ser.id}
                            label={ser.label}
                            checked={selectedService.findIndex(service => service === ser.value) === -1 ? false : true}
                            handleCheck={handleService}
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
                                selectedRating={selectedRating}
                                handleRatingChange={handleRatingChange}
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
                            value={minPrice}
                            handleChange={(e) => handleMinPrice(e)}
                            type="number"
                            min={0}
                        />
                        <h5 className='mx-2 mb-0 mt-3'>-</h5>
                        <TextInput
                            label="Max"
                            placeholder={"Max"}
                            value={maxPrice}
                            handleChange={(e) => handleMaxPrice(e)}
                            type="number"
                            min={0}
                        />
                    </div>
                    <div className='d-flex justify-content-end'>
                        <Button
                            disabled={(!minPrice && !maxPrice) || disable}
                            size="sm"
                            onClick={submitPrice}
                        >Apply
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchFilterList
