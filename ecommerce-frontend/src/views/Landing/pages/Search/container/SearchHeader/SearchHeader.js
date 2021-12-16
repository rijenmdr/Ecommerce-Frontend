import React, { useState } from 'react';
import { Dropdown, Image } from 'react-bootstrap';
import Tag from '../../../../components/Tag/Tag';
import ClosableTag from '../../../../components/Tag/ClosableTag';
import SelectInput from '../../../../components/SelectInput/SelectInput';

//images
import Grid from '../../../../../../assets/images/icons/ic-layout-square-grid.svg';
import List from '../../../../../../assets/images/icons/ic-layout-sections.svg';
import Filter from '../../../../../../assets/images/icons/ic-media-mixer.svg';

const SearchHeader = ({viewType, setViewType, showFilter, setShowFilter}) => {
    const [searchFilters, setSearchFilters] = useState([
        "Beans", "Carrots", "Apples","Beans", "Carrots", "Apples","Beans", "Carrots", "Apples"
    ]);
    const [sortBy, setSortBy] = useState("dateN");
    const [selectOptions] = useState([
        {
            id: 1,
            label: "Price: High to Low",
            value: "priH"
        },
        {
            id: 2,
            label: "Price: Low to High",
            value: "priL"
        },
        {
            id: 3,
            label: "Date: New to Old",
            value: "dateN"
        },
        {
            id: 4,
            label: "Date: Old to New",
            value: "dateO"
        },
    ])

    const changeViewType = (type) => {
        setViewType(type);
    }
    return (
        <div className='search-header'>
            <div className='search-header-title d-flex justify-between'>
                <h1 className='flex-2'>Result for term "guitar" for category Fruit and Vegetable</h1>
                <div className='display-type flex-1 d-flex align-items-center flex-wrap justify-content-end'>
                    <div 
                        onClick={()=>changeViewType('grid')} 
                        className='d-flex grid-view align-items-center cursor-pointer'
                    >
                        <Image 
                            className={`${viewType === 'grid' ? 'active-icon' : 'disabled-icon'}`} 
                            width={20} 
                            src={Grid} 
                        />
                        <h6 
                            className={`mb-0 ml-sm ${viewType === 'grid' ? 'text-primary' : 'text-dark-light'}`}
                        >
                            Grid View
                        </h6>
                    </div>
                    <div onClick={()=>changeViewType('list')} className='d-flex list-view align-items-center ml-xl mr-md cursor-pointer'>
                        <Image 
                            className={`${viewType === 'list' ? 'active-icon' : 'disabled-icon'}`} 
                            width={20} 
                            src={List} 
                        />
                        <h6 
                            className={`mb-0 ml-sm
                                ${viewType === 'list' ? 'text-primary' : 'text-dark-light'}`}>
                            List View
                        </h6>
                    </div>
                    <div className='d-flex justify-content-center align-items-center ml-md flex-wrap cursor-pointer'>
                        <Tag
                            value={117}
                            primary={true}
                        />
                        <h6 
                            className={`mb-0 ml-sm text-dark-light`}>
                            Products
                        </h6>
                    </div>
                </div>
            </div>
            <div className={`d-flex header-bottom align-items-center flex-wrap mt-4 w-100 
                ${searchFilters.length === 0 ? 'justify-content-end' :'justify-content-between'}`}>
                {searchFilters.length !== 0 &&
                    <div className="tags d-flex justify-content-start align-items-baseline flex-wrap mt-2">
                        <h5 className='mr-md'>Filtered By: </h5>
                        {
                            searchFilters.map((tagList, index) => (
                                <div className='mr-md mt-2'>
                                    <ClosableTag
                                        key={index}
                                        tag={tagList}
                                        list={searchFilters}
                                        setList={setSearchFilters}
                                    />
                                </div>
                            ))
                        }
                    </div>
                }
                <div className='d-flex sort-filter align-items-baseline'>
                    <div onClick={()=>setShowFilter(!showFilter)} className='filter-icon cursor-pointer'>
                        <Image src={Filter} alt='filter' width={25}/>
                    </div>
                    <SelectInput
                        selectOptions={selectOptions}
                        value={sortBy}
                        setValue={setSortBy}
                    />
                </div>
            </div>
            <Dropdown.Divider />
        </div>
    )
}

export default SearchHeader
